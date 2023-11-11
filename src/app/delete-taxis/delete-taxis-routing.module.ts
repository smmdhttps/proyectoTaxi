import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeleteTaxisPage } from './delete-taxis.page';

const routes: Routes = [
  {
    path: '',
    component: DeleteTaxisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeleteTaxisPageRoutingModule {}
