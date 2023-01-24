import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';

import { DisplayProgramsComponent } from './display-programs.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, TranslateModule],
  declarations: [DisplayProgramsComponent],
  exports: [DisplayProgramsComponent]
})
export class DisplayProgramComponentModule {}
