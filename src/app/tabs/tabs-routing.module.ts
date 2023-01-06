import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'deck',
        loadChildren: () => import('../deck/deck.module').then(m => m.DeckPageModule)
      },
      {
        path: 'ccr',
        loadChildren: () => import('../ccr/ccr.module').then(m => m.CcrPageModule)
      },
      {
        path: 'character',
        loadChildren: () => import('../character/character.module').then(m => m.CharacterPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/character',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/character',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
