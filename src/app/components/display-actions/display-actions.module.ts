import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';

import { DisplayActionsComponent } from './display-actions.component';
import { DetailsModalComponent } from '../details-modal/details-modal.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, TranslateModule],
  declarations: [DisplayActionsComponent, DetailsModalComponent],
  exports: [DisplayActionsComponent]
})
export class DisplayActionsComponentModule {}
