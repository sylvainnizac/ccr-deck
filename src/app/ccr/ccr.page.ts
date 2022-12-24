import { Component } from '@angular/core';

import { ProgramsService } from '../services/programs.service';
import { DeckService } from '../services/deck.service';
import CCRActions from '../../assets/json/ccr_actions.json';
import CCRPrograms from '../../assets/json/ccr_programs.json';
import Devices from '../../assets/json/devices.json';
import { Appareil } from '../interfaces/deck';
import { Data } from '../interfaces/datastruct';

@Component({
  selector: 'app-ccr',
  templateUrl: 'ccr.page.html',
  styleUrls: ['ccr.page.scss']
})
export class CcrPage {

  data: Data
  device: Appareil = new Appareil(Devices.ccr[0])
  max_program: number = 0
  current_program: number = 0
  attributes_list: string[] = ["attaque", "corruption", "firewall", "TdD"]

  constructor(
    private deckService: DeckService, 
    private programService: ProgramsService
    ) {
    this.deckService.changeBaseDevice(new Appareil(Devices.ccr[1]))
    this.deckService.displayed_device.subscribe(data => this.device = data)

    this.data = this.getData()

    this.programService.setMaxProgram(this.device.indice)
    this.programService.max_program.subscribe(data => this.max_program = data)
    this.programService.current_program.subscribe(data => this.current_program = data)
  }

  getData() {
    return new Data(CCRActions, CCRPrograms["common_programs"], CCRPrograms["hacking_programs"])
  }

  decreaseCondition() {
    this.deckService.updateCondition(-1)
  }

  increaseCondition() {
    this.deckService.updateCondition(1)
  }

}
