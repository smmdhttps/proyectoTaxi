import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeleteTaxisPageRoutingModule } from './delete-taxis-routing.module';

import { DeleteTaxisPage } from './delete-taxis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeleteTaxisPageRoutingModule
  ],
  declarations: [DeleteTaxisPage]
})
export class DeleteTaxisPageModule {}
