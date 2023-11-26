import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditTaxisPage } from './edit-taxis.page';

const routes: Routes = [
  {
    path: '',
    component: EditTaxisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditTaxisPageRoutingModule {}
