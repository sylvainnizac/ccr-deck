import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DeckPage } from './deck.page';
import { DisplayProgramComponentModule } from '../display-programs/display-programs.module';
import { DisplayActionsComponentModule } from '../display-actions/display-actions.module';

import { DeckPageRoutingModule } from './deck-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    DisplayProgramComponentModule,
    DisplayActionsComponentModule,
    FormsModule,
    DeckPageRoutingModule
  ],
  declarations: [DeckPage]
})
export class DeckPageModule {}
