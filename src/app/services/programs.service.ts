import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CcrService } from './ccr.service';

@Injectable({
  providedIn: 'root'
})
export class ProgramsService {

  max_program_ccr = new BehaviorSubject(0)
  current_program_ccr = new BehaviorSubject(0)
  max_program_deck = new BehaviorSubject(0)
  current_program_deck = new BehaviorSubject(0)

  programs_effects: { [name: string]: (value: number)=>void } = {
    "CcrToolbox": this.CcrToolbox
  };

  constructor(
    private ccrService: CcrService
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

  applyProgramEffect(name: string, value: number){
    if (this.programs_effects[name]) {
      return this.programs_effects[name](value);
    }
  
    throw new Error(`Method '${name}' is not implemented.`);
  }

  private CcrToolbox(value: number) {
    console.log(this.ccrService)
    console.log(value)
    this.ccrService.updateMod("DProc", value)
  }
}
