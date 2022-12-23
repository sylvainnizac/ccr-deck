import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../interfaces/action';

@Component({
  selector: 'app-display-actions',
  templateUrl: './display-actions.component.html',
  styleUrls: ['./display-actions.component.scss'],
})
export class DisplayActionsComponent implements OnInit {

  @Input() categories?: Category[];
  @Input() headers?: string[];

  constructor() { }

  ngOnInit() {}

  toggleGroup(group: any) {
    console.log(group)
    group.show = !group.show;
  }
  
  isGroupShown(group: any) {
    return group.show;
  }

}
