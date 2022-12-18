import { Component } from '@angular/core';

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

type Appareil = {
  name: string;
  indice: number;
  TdD: number;
  firewall: number;
  attaque: number;
  corruption: number;
}

interface DataStruct {
  readonly actionsHeaders: String[];
  readonly programsHeaders: String[];
  actions?: Action[];
  programs?: Program[];
}

class Data implements DataStruct {
  actionsHeaders = ["name", "mark", "test", "limite", "type", "page"]
  programsHeaders = ["active", "installed", "name", "page", "description"]

  constructor (public actions?: Action[], public programs?: Program[]) {
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

  constructor() {
    this.data = this.getData()
    this.appareil = {
      "name": "Hermès Chariot",
      "indice": 2,
      "TdD": 5,
      "firewall": 4,
      "attaque": 4,
      "corruption": 2,
    }
  }

  getData() {
    var actions_list: Action[];
    actions_list = [
      {"name": "hacker à la volée","mark": "aucune","test": "Hacking+LOG vs Firewall+INT","limite": "Corruption","type": "Complexe","page": 666},
      {"name": "brouiller les signaux","mark": "4","test": "G. Elec+LOG","limite": "Attaquue","type": "Complexe","page": 239}
    ];

    var programs_list: Program[];
    programs_list = [
      {"active": false, "installed": false, "name": "navigateur", "page": 247, "description": "temps de recherche matriciel / 2"},
      {"active": false, "installed": false, "name": "exploitation", "page": 247, "description": "Corruption+2 pour \"hacker à la volée\""},
    ];

    var recovered_data: Data;
    recovered_data = new Data(actions_list, programs_list)
    return recovered_data
  }

}
