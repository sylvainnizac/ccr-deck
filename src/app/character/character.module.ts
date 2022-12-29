import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CharacterPageRoutingModule } from './character-routing.module';
import { CharacterPage } from './character.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    CharacterPageRoutingModule
  ],
  declarations: [CharacterPage]
})
export class CharacterPageModule {}
