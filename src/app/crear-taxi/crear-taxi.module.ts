import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearTaxiPageRoutingModule } from './crear-taxi-routing.module';

import { CrearTaxiComponent } from './crear-taxi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearTaxiPageRoutingModule
  ],
  declarations: [CrearTaxiComponent]
})
export class CrearTaxiPageModule {}
