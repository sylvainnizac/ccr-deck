import { Component } from '@angular/core'
import { ActionSheetController } from '@ionic/angular'

import { environment } from 'src/environments/environment'
import { TranslateConfigService } from '../../services/translate-config.service'
import Characters from '../../../assets/json/characters.json'
import { Character } from 'src/app/interfaces/character'


@Component({
  selector: 'app-character',
  templateUrl: 'character.page.html',
  styleUrls: ['character.page.scss']
})
export class CharacterPage {

  character: Character = new Character(Characters[0])
  all_characters: Character[] = []

  app_version: number = environment.versionNumber
  language: string

  constructor(
    private translateConfigService: TranslateConfigService,
    private actionSheetController: ActionSheetController
  ) {
    this.translateConfigService.getDefaultLanguage()
    this.language = this.translateConfigService.getCurrentLang()

    for (let character of Characters){
      this.all_characters.push(new Character(character))
    }
  }

  changeCharacter(event: Event) {

  }

  compareWith(o1: any, o2: any) {
    return o1 && o2 ? o1.name === o2.name : o1 === o2;
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
