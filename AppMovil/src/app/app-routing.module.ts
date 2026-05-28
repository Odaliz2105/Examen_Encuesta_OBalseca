import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },

  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.page').then(m => m.LoginPage),
  },

  {
    path: 'register',
    loadComponent: () =>
      import('./pages/register/register.page').then(m => m.RegisterPage),
  },

  {
    path: 'detail',
    loadComponent: () =>
      import('./pages/detail/detail.page').then(m => m.DetailPage),
  },

  {
    path: 'tabs',
    loadChildren: () =>
      import('./tabs/tabs.module').then(m => m.TabsPageModule),
  },
  {
    path: 'tab5',
    loadComponent: () =>
  import('./tab5/tab5.page').then(m => m.Tab5Page),
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}