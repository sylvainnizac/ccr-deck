import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgramsService {

  max_program = new BehaviorSubject(0)
  current_program = new BehaviorSubject(0)

  constructor() { }

  setMaxProgram(value: number) {
    this.max_program.next(value)
  }

  setCurrentProgram(value: number) {
    this.current_program.next(value)
  }

}
