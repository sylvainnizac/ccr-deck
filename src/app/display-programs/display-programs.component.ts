import { Component, Input, OnInit } from '@angular/core';

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

  ngOnInit() {}

}
