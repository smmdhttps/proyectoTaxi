import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { EditTaxisPage } from './edit-taxis/edit-taxis.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },//ESTO ES LO PRIMERO QUE MOSTRARA LA APLICACION (POR DEFECTO)

// ORDENAR LOS DEMAS ELEMENTOS
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'crear-taxi',
    loadChildren: () => import('./crear-taxi/crear-taxi.module').then( m => m.CrearTaxiPageModule)
  },
  {
    path: 'load-taxis',
    loadChildren: () => import('./load-taxis/load-taxis.module').then( m => m.LoadTaxisPageModule)
  },

  {
    path: 'edit-taxis',
    loadChildren: () => import('./edit-taxis/edit-taxis.module').then( m => m.EditTaxisPageModule)
  },

  { path: 'edit-taxis/:id',
   component: EditTaxisPage },
  {
    path: 'acerca-de-nosotros',
    loadChildren: () => import('./acerca-de-nosotros/acerca-de-nosotros.module').then( m => m.AcercaDeNosotrosPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
