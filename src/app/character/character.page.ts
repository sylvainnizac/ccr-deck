import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-character',
  templateUrl: 'character.page.html',
  styleUrls: ['character.page.scss']
})
export class CharacterPage {

  app_version: number = environment.versionNumber

  constructor() {}

}
