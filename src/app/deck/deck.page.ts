import { Component } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

import { Device } from '../interfaces/devices';
import { Data } from '../interfaces/datastruct';
import { DeckService } from '../services/deck.service';
import { ProgramsService } from '../services/programs.service';
import { TranslateConfigService } from '../services/translate-config.service';
import DeckActions from '../../assets/json/deck_actions.json';
import DeckPrograms from '../../assets/json/deck_programs.json';
import Devices from '../../assets/json/devices.json';

@Component({
  selector: 'app-deck',
  templateUrl: 'deck.page.html',
  styleUrls: ['deck.page.scss']
})
export class DeckPage {

  data: Data
  device: Device = new Device(Devices.temporary[0])
  all_devices: Device[] = []
  max_program: number = 0
  current_program: number = 0
  attributes_list: string[] = ["attack", "sleaze", "firewall", "DProc"]

  noise: number = 0

  language: string

  constructor(
    private deckService: DeckService, 
    private programService: ProgramsService,
    private translateConfigService: TranslateConfigService
    ) {
    this.deckService.changeBaseDevice(new Device(Devices.deck[0]))
    this.deckService.displayed_device.subscribe(data => this.device = data)
    this.deckService.displayed_noise.subscribe(data => this.noise = data)

    this.data = this.getData()

    this.programService.setMaxProgramDeck(this.device.rating)
    this.programService.max_program_deck.subscribe(data => this.max_program = data)
    this.programService.current_program_deck.subscribe(data => this.current_program = data)

    for (let appareil of Devices.deck){
      this.all_devices.push(new Device(appareil))
    }

    this.translateConfigService.getDefaultLanguage()
    this.language = this.translateConfigService.getCurrentLang()
  }

  getData() {
    return new Data(DeckActions, DeckPrograms["common_programs"], DeckPrograms["hacking_programs"])
  }

  drop(event: CdkDragDrop<string[]>) {
    this.deckService.swapAttributes(this.attributes_list[event.previousIndex], this.attributes_list[event.currentIndex])
  }

  decreaseCondition() {
    this.deckService.updateCondition(-1)
  }

  increaseCondition() {
    this.deckService.updateCondition(1)
  }

  decreaseNoise() {
    this.deckService.updateNoise(-1)
  }

  increaseNoise() {
    this.deckService.updateNoise(1)
  }

  changeDevice(event: Event) {
    this.programService.setMaxProgramDeck(this.device.rating)
  }

  compareWith(o1: any, o2: any) {
    return o1 && o2 ? o1.name === o2.name : o1 === o2;
  }

}
