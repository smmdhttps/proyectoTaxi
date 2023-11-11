import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearTaxiComponent } from './crear-taxi.page';

const routes: Routes = [
  {
    path: '',
    component: CrearTaxiComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearTaxiPageRoutingModule {}
