import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadComponent: () =>
          import('../tab1/tab1.page').then(m => m.Tab1Page),
          
      },
      {
        path: 'tab2',
        loadChildren: () =>
          import('../tab2/tab2.module').then(m => m.Tab2PageModule),
      },
      {
        path: 'tab3',
        loadChildren: () =>
          import('../tab3/tab3.module').then(m => m.Tab3PageModule),
      },
      {
        path: 'tab4',
        loadComponent: () =>
          import('../tab4/tab4.page').then(m => m.Tab4Page),
      },

      {
        path: 'tab5',
        loadComponent: () =>
          import('../tab5/tab5.page').then(m => m.Tab5Page),
      },

      {
        path: '',
        redirectTo: 'tab1',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}