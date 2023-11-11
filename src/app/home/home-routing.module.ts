import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { CrearTaxiComponent } from '../crear-taxi/crear-taxi.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },

  { path: 'crear-taxi', 
    component: CrearTaxiComponent, 
  },
    // Otras rutas...

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
