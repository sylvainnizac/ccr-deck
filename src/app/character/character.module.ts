import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CharacterPage } from './character.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { CharacterPageRoutingModule } from './character-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    CharacterPageRoutingModule
  ],
  declarations: [CharacterPage]
})
export class CharacterPageModule {}
