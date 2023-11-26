import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditTaxisPageRoutingModule } from './edit-taxis-routing.module';

import { EditTaxisPage } from './edit-taxis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditTaxisPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [EditTaxisPage]
})
export class EditTaxisPageModule {}
