import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';

import { Category } from '../interfaces/action';
import { TranslateConfigService } from '../services/translate-config.service';
import DefaultEnum from '../../assets/json/default_enumerations.json';

@Component({
  selector: 'app-display-actions',
  templateUrl: './display-actions.component.html',
  styleUrls: ['./display-actions.component.scss'],
})
export class DisplayActionsComponent implements OnInit {

  @Input() categories?: Category[];
  @Input() headers?: string[];

  @ViewChild(IonModal) modal: IonModal

  language: string

  device_attributes: [
    {"id": 0, "value": "ATTACK"},
    {"id": 1, "value": "D_PROC"},
    {"id": 2, "value": "FIREWALL"},
    {"id": 3, "value": "SLEAZE"}
  ]

  constructor(
    private translateConfigService: TranslateConfigService
  ) {
    this.translateConfigService.getDefaultLanguage()
    this.language = this.translateConfigService.getCurrentLang()
  }

  ngOnInit() {}

  close() {
    this.modal.dismiss(null, "cancel");
  }

}
