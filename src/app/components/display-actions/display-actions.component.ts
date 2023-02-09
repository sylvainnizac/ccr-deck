import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IonModal, ModalController } from '@ionic/angular';

import { Action, Category } from '../../interfaces/action';
import { TranslateConfigService } from '../../services/translate-config.service';
import { DetailsModalComponent } from '../details-modal/details-modal.component';

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

  constructor(
    private modalCtrl: ModalController,
    private translateConfigService: TranslateConfigService
  ) {
    this.translateConfigService.getDefaultLanguage()
    this.language = this.translateConfigService.getCurrentLang()
  }

  ngOnInit() {}

  async openModal(action: Action) {
    const modal = await this.modalCtrl.create({
      component: DetailsModalComponent,
      componentProps: {
        "action": action
      }
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();
  }

}
