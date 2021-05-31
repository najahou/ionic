import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OneadressePageRoutingModule } from './oneadresse-routing.module';

import { OneadressePage } from './oneadresse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OneadressePageRoutingModule
  ],
  declarations: [OneadressePage]
})
export class OneadressePageModule {}
