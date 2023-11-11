import { Component, OnInit } from '@angular/core';
import { TaxiCrudService } from 'src/services/taxi-crud.service';

@Component({
  selector: 'app-crear-taxi',
  templateUrl: './crear-taxi.page.html',
  styleUrls: ['./crear-taxi.page.scss'],
})
export class CrearTaxiComponent {
  nuevoTaxi: any = {};

  constructor(private taxiService: TaxiCrudService) {}

  crearTaxi() {
    this.taxiService.createTaxi(this.nuevoTaxi).subscribe(() => {
      console.log('Taxi creado con éxito');
      // Puedes realizar acciones adicionales después de crear el taxi, como recargar la lista de taxis, etc.
    });
  }
}
