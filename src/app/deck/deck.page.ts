import { Component } from '@angular/core';
import { ProgramsService } from '../services/programs.service';
import DeckActions from '../../assets/json/deck_actions.json';
import DeckPrograms from '../../assets/json/deck_programs.json';

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

interface BaseAppareil {
  name: string;
  indice: number;
  TdD: number;
  firewall: number;
  attaque: number;
  corruption: number;
  condition: number;
}

class Appareil implements BaseAppareil {

  condition: number

  constructor (
    public name: string,
    public indice: number,
    public TdD: number,
    public firewall: number,
    public attaque: number,
    public corruption: number
    ) {
      this.condition = 8 + (indice/2)
  }
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
  appareil: Appareil
  max_program: number = 0
  current_program: number = 0

  constructor(private programService: ProgramsService) {
    this.data = this.getData()
    this.appareil = this.getAppareil()
    this.programService.setMaxProgram(this.appareil.indice)
    this.programService.max_program.subscribe(data => this.max_program = data)
    this.programService.current_program.subscribe(data => this.current_program = data)
  }

  getData() {
    var recovered_data: Data;
    recovered_data = new Data(DeckActions, DeckPrograms["common_programs"], DeckPrograms["hacking_programs"])
    return recovered_data
  }

  getAppareil() {
    let recovered_appareil: Appareil
    recovered_appareil = new Appareil("Hermès Chariot", 2, 5, 4, 4, 2)
    return recovered_appareil
  }

}
