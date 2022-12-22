import { Component } from '@angular/core';
import { ProgramsService } from '../services/programs.service';
import { DeckService } from '../services/deck.service';
import DeckActions from '../../assets/json/deck_actions.json';
import DeckPrograms from '../../assets/json/deck_programs.json';
import Devices from '../../assets/json/devices.json';
import { Appareil } from '../interfaces/deck';

type Action = {
  name: string;
  mark: string;
  test: string;
  limite: string;
  type: string;
  page: number;
}

type Category = {
  name: string;
  show: boolean;
  actions: Action[]
}

type Program = {
  active: boolean;
  installed: boolean;
  name: string;
  page: number;
  description: string;
}

interface DataStruct {
  readonly actionsHeaders: String[];
  readonly programsHeaders: String[];
  categories?: Category[];
  programs?: Program[];
  hacking_programs?: Program[];
}

class Data implements DataStruct {
  actionsHeaders = ["", "mark", "test", "limite", "type", "page"]
  programsHeaders = ["active", "installed", "name", "page", "description"]

  constructor (public categories?: Category[], public programs?: Program[], public hacking_programs?: Program[]) {
  }
}

@Component({
  selector: 'app-deck',
  templateUrl: 'deck.page.html',
  styleUrls: ['deck.page.scss']
})
export class DeckPage {

  data: Data
  device: Appareil = new Appareil(Devices.deck[0])
  max_program: number = 0
  current_program: number = 0

  constructor(private deckService: DeckService, private programService: ProgramsService) {
    this.deckService.changeBaseDevice(new Appareil(Devices.deck[1]))
    this.deckService.displayed_device.subscribe(data => this.device = data)

    this.data = this.getData()

    this.programService.setMaxProgram(this.device.indice)
    this.programService.max_program.subscribe(data => this.max_program = data)
    this.programService.current_program.subscribe(data => this.current_program = data)
  }

  getData() {
    return new Data(DeckActions, DeckPrograms["common_programs"], DeckPrograms["hacking_programs"])
  }

}
