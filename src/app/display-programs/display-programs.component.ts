import { Component, Input, OnInit } from '@angular/core';
import { Program } from '../interfaces/program';
import { ProgramsService } from '../services/programs.service';

@Component({
  selector: 'app-display-programs',
  templateUrl: './display-programs.component.html',
  styleUrls: ['./display-programs.component.scss'],
})
export class DisplayProgramsComponent implements OnInit {

  @Input() programs?: Program[];
  @Input() headers?: string[];
  @Input() title?: string;
  max_program: number = 0;
  current_program: number = 0;

  ngOnInit() {}

  constructor(private programService: ProgramsService) {
    this.programService.max_program.subscribe(data => this.max_program = data)
    this.programService.current_program.subscribe(data => this.current_program = data)
  }

  setActive(e: any) {
    if (e.detail.checked && this.current_program < this.max_program){
      this.programService.setCurrentProgram(this.current_program +=1)
    } else if (!e.detail.checked) {
      this.programService.setCurrentProgram(this.current_program -=1)
    }
  }

}
