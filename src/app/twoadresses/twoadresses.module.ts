import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TwoadressesPageRoutingModule } from './twoadresses-routing.module';

import { TwoadressesPage } from './twoadresses.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TwoadressesPageRoutingModule
  ],
  declarations: [TwoadressesPage]
})
export class TwoadressesPageModule {}
