import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoadTaxisPage } from './load-taxis.page';

const routes: Routes = [
  {
    path: '',
    component: LoadTaxisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoadTaxisPageRoutingModule {}
