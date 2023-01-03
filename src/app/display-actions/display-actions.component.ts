import { Component, Input, OnInit } from '@angular/core';

import { Category } from '../interfaces/action';
import { TranslateConfigService } from '../services/translate-config.service';

@Component({
  selector: 'app-display-actions',
  templateUrl: './display-actions.component.html',
  styleUrls: ['./display-actions.component.scss'],
})
export class DisplayActionsComponent implements OnInit {

  @Input() categories?: Category[];
  @Input() headers?: string[];

  language: string

  constructor(
    private translateConfigService: TranslateConfigService
  ) {
    this.translateConfigService.getDefaultLanguage()
    this.language = this.translateConfigService.getCurrentLang()
  }

  ngOnInit() {}

  toggleGroup(group: any) {
    console.log(group)
    group.show = !group.show;
  }
  
  isGroupShown(group: any) {
    return group.show;
  }

}
