import { Component } from '@angular/core';

import { Appareil } from '../interfaces/deck';
import { Data } from '../interfaces/datastruct';
import { CcrService } from '../services/ccr.service';
import { ProgramsService } from '../services/programs.service';
import { TranslateConfigService } from '../services/translate-config.service';
import CCRActions from '../../assets/json/ccr_actions.json';
import CCRPrograms from '../../assets/json/ccr_programs.json';
import Devices from '../../assets/json/devices.json';


@Component({
  selector: 'app-ccr',
  templateUrl: 'ccr.page.html',
  styleUrls: ['ccr.page.scss']
})
export class CcrPage {

  data: Data
  device: Appareil = new Appareil(Devices.temporary[0])
  all_devices: Appareil[] = []
  
  max_program: number = 0
  current_program: number = 0

  language: string

  constructor(
    private CcrService: CcrService, 
    private programService: ProgramsService,
    private translateConfigService: TranslateConfigService
    ) {
    this.CcrService.changeBaseDevice(new Appareil(Devices.ccr[2]))
    this.CcrService.displayed_device.subscribe(data => this.device = data)

    this.data = this.getData()

    this.programService.setMaxProgram(this.device.indice)
    this.programService.max_program.subscribe(data => this.max_program = data)
    this.programService.current_program.subscribe(data => this.current_program = data)

    for (let appareil of Devices.ccr){
      this.all_devices.push(new Appareil(appareil))
    }

    this.translateConfigService.getDefaultLanguage()
    this.language = this.translateConfigService.getCurrentLang()
  }

  getData() {
    return new Data(CCRActions, CCRPrograms["common_programs"], CCRPrograms["hacking_programs"])
  }

  decreaseCondition() {
    this.CcrService.updateCondition(-1)
  }

  increaseCondition() {
    this.CcrService.updateCondition(1)
  }

  changeDevice(event: Event) {
    this.programService.setMaxProgram(this.device.indice)
  }

  compareWith(o1: any, o2: any) {
    return o1 && o2 ? o1.name === o2.name : o1 === o2;
  }

}
