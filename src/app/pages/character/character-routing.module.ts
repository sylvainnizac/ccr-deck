import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterPage } from './character.page';

const routes: Routes = [
  {
    path: '',
    component: CharacterPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacterPageRoutingModule {}
