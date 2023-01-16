import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProgramsService {

  max_program_ccr = new BehaviorSubject(0)
  current_program_ccr = new BehaviorSubject(0)
  max_program_deck = new BehaviorSubject(0)
  current_program_deck = new BehaviorSubject(0)

  constructor(

  ) { }

  setMaxProgramCcr(value: number) {
    this.max_program_ccr.next(value)
  }

  setCurrentProgramCcr(value: number) {
    this.current_program_ccr.next(value)
  }

  setMaxProgramDeck(value: number) {
    this.max_program_deck.next(value)
  }

  setCurrentProgramDeck(value: number) {
    this.current_program_deck.next(value)
  }

}
