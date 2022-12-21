import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

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

@Injectable({
  providedIn: 'root'
})
export class DeckService {

  device = new BehaviorSubject(new Appareil("Hermès Chariot", 2, 5, 4, 4, 2))

  constructor() { }

}
