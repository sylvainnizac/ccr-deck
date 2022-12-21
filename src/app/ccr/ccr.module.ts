import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CcrPage } from './ccr.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { CcrPageRoutingModule } from './ccr-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    CcrPageRoutingModule
  ],
  declarations: [CcrPage]
})
export class CcrPageModule {}
