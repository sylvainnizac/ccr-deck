import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DisplayActionsComponent } from './display-actions.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [DisplayActionsComponent],
  exports: [DisplayActionsComponent]
})
export class DisplayActionsComponentModule {}
