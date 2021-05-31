import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
     
  children:[
    
    {
    path: 'home',
    loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
    },
    {
      path: 'twoadresses',
      loadChildren: () => import('../twoadresses/twoadresses.module').then( m => m.TwoadressesPageModule)
    },
    {
      path: 'test',
      loadChildren: () => import('../test/test.module').then( m => m.TestPageModule)
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
