import { Component } from '@angular/core';
import { ProgramsService } from '../services/programs.service';

type Action = {
  name: string;
  mark: string;
  test: string;
  limite: string;
  type: string;
  page: number;
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
  actions?: Action[];
  programs?: Program[];
  hacking_programs?: Program[];
}

class Data implements DataStruct {
  actionsHeaders = ["name", "mark", "test", "limite", "type", "page"]
  programsHeaders = ["active", "installed", "name", "page", "description"]

  constructor (public actions?: Action[], public programs?: Program[], public hacking_programs?: Program[]) {
  }
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

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
    var actions_list: Action[];
    actions_list = [
      {"name": "hacker à la volée","mark": "aucune","test": "Hacking+LOG vs Firewall+INT","limite": "Corruption","type": "Complexe","page": 666},
      {"name": "brouiller les signaux","mark": "4","test": "G. Elec+LOG","limite": "Attaque","type": "Complexe","page": 239}
    ];

    var programs_list: Program[];
    programs_list = [
      {"active": false, "installed": false, "name": "navigateur", "page": 247, "description": "temps de recherche matriciel / 2"},
      {"active": false, "installed": false, "name": "édition", "page": 247, "description": "TdD + 2 pour \"Editer un fichier\""},
    ];

    var hacking_programs_list: Program[];
    hacking_programs_list = [
      {"active": false, "installed": false, "name": "exploitation", "page": 247, "description": "Corruption + 2 pour \"hacker à la volée\""},
      {"active": false, "installed": false, "name": "furtivité", "page": 247, "description": "Corruption + 1"},
    ];

    var recovered_data: Data;
    recovered_data = new Data(actions_list, programs_list, hacking_programs_list)
    return recovered_data
  }

  getAppareil() {
    let recovered_appareil: Appareil
    recovered_appareil = new Appareil("Hermès Chariot", 2, 5, 4, 4, 2)
    return recovered_appareil
  }

}
