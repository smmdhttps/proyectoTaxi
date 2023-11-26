import { Component, OnInit } from '@angular/core';
import { TaxiLoadService } from 'src/services/taxi-load.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-load-taxis',
  templateUrl: './load-taxis.page.html',
  styleUrls: ['./load-taxis.page.scss'],
})
export class LoadTaxisPage implements OnInit {
  taxisLoad: any[] = [];

  constructor(
    private taxisLoadService: TaxiLoadService,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.loadTaxis();
  }

  async loadTaxis() {
    this.taxisLoadService.loadTaxis().subscribe((data) => {
      this.taxisLoad = data;
    });
  }

  async eliminarTaxi(id: number) {
    const alert = await this.alertController.create({
      header: 'Confirmar eliminación',
      message: '¿Estás seguro de que deseas eliminar este taxi?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            // Acción al cancelar
          },
        },
        {
          text: 'Eliminar',
          handler: async () => {
            this.taxisLoadService.eliminarTaxi(id).subscribe(
              () => {
                // Actualizar la lista después de eliminar
                this.loadTaxis();
                this.mostrarMensaje('Taxi eliminado con éxito');
              },
              (error) => {
                console.error('Error eliminando taxi:', error);
                this.mostrarMensaje('Error al eliminar el taxi', true);
              }
            );
          },
        },
      ],
    });

    await alert.present();
  }

  async mostrarMensaje(mensaje: string, esError: boolean = false) {
    const alert = await this.alertController.create({
      header: esError ? 'Error' : 'Éxito',
      message: mensaje,
      buttons: ['OK'],
    });

    await alert.present();
  }
}
