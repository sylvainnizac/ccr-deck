import { Component, Input, OnInit } from '@angular/core';
import { ProgramsService } from '../services/programs.service';

type Program = {
  active: boolean;
  installed: boolean;
  name: string;
  page: number;
  description: string;
}

@Component({
  selector: 'app-display-programs',
  templateUrl: './display-programs.component.html',
  styleUrls: ['./display-programs.component.scss'],
})
export class DisplayProgramsComponent implements OnInit {

  @Input() programs?: Program[];
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
