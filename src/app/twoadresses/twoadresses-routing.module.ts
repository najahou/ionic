import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TwoadressesPage } from './twoadresses.page';

const routes: Routes = [
  {
    path: '',
    component: TwoadressesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TwoadressesPageRoutingModule {}
