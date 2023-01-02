import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { CcrPage } from './ccr.page';
import { DisplayProgramComponentModule } from '../display-programs/display-programs.module';
import { DisplayActionsComponentModule } from '../display-actions/display-actions.module';
import { CcrPageRoutingModule } from './ccr-routing.module';

@NgModule({
  imports: [
    CcrPageRoutingModule,
    CommonModule,
    DisplayProgramComponentModule,
    DisplayActionsComponentModule,
    FormsModule,
    IonicModule,
    TranslateModule
  ],
  declarations: [CcrPage]
})
export class CcrPageModule {}
