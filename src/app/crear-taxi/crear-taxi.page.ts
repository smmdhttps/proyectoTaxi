import { Component, OnInit } from '@angular/core';
import { TaxiCreateService } from 'src/services/taxi-create.service';

@Component({
  selector: 'app-crear-taxi',
  templateUrl: './crear-taxi.page.html',
  styleUrls: ['./crear-taxi.page.scss'],
})
export class CrearTaxiComponent {

  taxiData = {
    propietario: '',
    modelo: '',
    placa: ''
  };

  constructor(private taxiCreateService: TaxiCreateService) {}

  createTaxi() {
    if (!this.taxiData.propietario || !this.taxiData.modelo || !this.taxiData.placa) {
      this.taxiCreateService.presentToast('Todos los campos son obligatorios', false);
      return;
    }

    this.taxiCreateService.createTaxi(this.taxiData)
      .subscribe((response: any) => {
        if (response.resultado === 'OK') {
          this.taxiCreateService.presentToast('Taxi creado con éxito', true);

        } else {
          this.taxiCreateService.presentToast('Error al crear el taxi: ' + response.mensaje, false);
        }
      });
  }

}
