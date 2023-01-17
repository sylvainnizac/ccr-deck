import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TranslateModule } from '@ngx-translate/core';

import { DeckPageRoutingModule } from './deck-routing.module';
import { DeckPage } from './deck.page';
import { DisplayProgramComponentModule } from '../../components/display-programs/display-programs.module';
import { DisplayActionsComponentModule } from '../../components/display-actions/display-actions.module';


@NgModule({
  imports: [
    CommonModule,
    DeckPageRoutingModule,
    DisplayProgramComponentModule,
    DisplayActionsComponentModule,
    DragDropModule,
    FormsModule,
    IonicModule,
    TranslateModule
  ],
  declarations: [DeckPage]
})
export class DeckPageModule {}
