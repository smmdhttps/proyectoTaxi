import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoadTaxisPageRoutingModule } from './load-taxis-routing.module';

import { LoadTaxisPage } from './load-taxis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoadTaxisPageRoutingModule
  ],
  declarations: [LoadTaxisPage]
})
export class LoadTaxisPageModule {}
