import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

import { environment } from 'src/environments/environment';
import { TranslateConfigService } from '../services/translate-config.service';


@Component({
  selector: 'app-character',
  templateUrl: 'character.page.html',
  styleUrls: ['character.page.scss']
})
export class CharacterPage {

  app_version: number = environment.versionNumber
  language: string

  constructor(
    private translateConfigService: TranslateConfigService,
    private actionSheetController: ActionSheetController
  ) {
    this.translateConfigService.getDefaultLanguage()
    this.language = this.translateConfigService.getCurrentLang()
  }

  async changeLanguage() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Languages',
      buttons: [
        {
          text: 'English',
          icon: 'language-outline',
          handler: () => {
            this.language = 'en',
            this.translateConfigService.setLanguage('en')
          }
        },
        {
          text: 'Français',
          icon: 'language-outline',
          handler: () => {
            this.language = 'fr',
            this.translateConfigService.setLanguage('fr')
          }
        },
        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {}
        }
      ]
    })
    await actionSheet.present()
  }

}
