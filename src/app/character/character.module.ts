import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { CharacterPageRoutingModule } from './character-routing.module';
import { CharacterPage } from './character.page';

@NgModule({
  imports: [
    CharacterPageRoutingModule,
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule
  ],
  declarations: [CharacterPage]
})
export class CharacterPageModule {}
