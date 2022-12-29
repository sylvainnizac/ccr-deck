import { Component } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

import { ProgramsService } from '../services/programs.service';
import { DeckService } from '../services/deck.service';
import DeckActions from '../../assets/json/deck_actions.json';
import DeckPrograms from '../../assets/json/deck_programs.json';
import Devices from '../../assets/json/devices.json';
import { Appareil } from '../interfaces/deck';
import { Data } from '../interfaces/datastruct';

@Component({
  selector: 'app-deck',
  templateUrl: 'deck.page.html',
  styleUrls: ['deck.page.scss']
})
export class DeckPage {

  data: Data
  device: Appareil = new Appareil(Devices.temporary[0])
  all_devices: Appareil[] = []
  max_program: number = 0
  current_program: number = 0
  attributes_list: string[] = ["attaque", "corruption", "firewall", "TdD"]

  constructor(
    private deckService: DeckService, 
    private programService: ProgramsService
    ) {
    this.deckService.changeBaseDevice(new Appareil(Devices.deck[0]))
    this.deckService.displayed_device.subscribe(data => this.device = data)

    this.data = this.getData()

    this.programService.setMaxProgram(this.device.indice)
    this.programService.max_program.subscribe(data => this.max_program = data)
    this.programService.current_program.subscribe(data => this.current_program = data)

    for (let appareil of Devices.deck){
      this.all_devices.push(new Appareil(appareil))
    }
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

  changeDevice(event: Event) {
    this.programService.setMaxProgram(this.device.indice)
  }

  compareWith(o1: any, o2: any) {
    return o1 && o2 ? o1.name === o2.name : o1 === o2;
  }

}
