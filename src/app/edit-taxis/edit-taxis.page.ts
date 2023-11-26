import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { TaxiEditService } from  'src/services/taxi-edit.service';

@Component({
  selector: 'app-edit-taxis',
  templateUrl: './edit-taxis.page.html',
  styleUrls: ['./edit-taxis.page.scss'],
})
export class EditTaxisPage implements OnInit {
  // Declaracion de variables para almacenar el ID del taxi y sus datos
  taxiId: string = "";
  taxiData: any = {};

  constructor(
    private route: ActivatedRoute, // Para acceder a los parámetros de la ruta
    private taxiEditService: TaxiEditService, // Para realizar operaciones de edición de taxis
    private toastController: ToastController // Para mostrar mensajes tipo Toast
  ) {}

  // Método llamado automáticamente al inicializar el componente
  ngOnInit() {
    this.taxiId = this.route.snapshot.params['id']; // Obtiene el ID del taxi de la ruta
    // Carga los datos del taxi usando el servicio correspondiente
    this.loadTaxiData();
  }

  // Método para cargar los datos del taxi desde el servicio
  loadTaxiData() {
    this.taxiEditService.getTaxi(this.taxiId).subscribe((data) => {
      // Al recibir los datos del taxi, los asigna a la variable taxiData
      this.taxiData = data;
    });
  }

  // Método para guardar los cambios en el taxi
saveChanges() {
  // Verifica si todos los campos requeridos están llenos
  if (this.RequiredFieldsFilled()) {
    // Llama al servicio para editar el taxi y maneja la respuesta y errores
    this.taxiEditService.editTaxi(this.taxiId, this.taxiData).subscribe(
      () => {
        // En caso de éxito, muestra un Toast con un mensaje positivo
        this.presentToast('Datos actualizados con éxito', true);
      },
      (error) => {
        // En caso de error, muestra un mensaje de error y loguea los detalles en la consola
        console.error('Error en la solicitud HTTP', error);
        this.presentToast('Error al actualizar el taxi', false);
      }
    );
  } else {
    // Muestra un mensaje de error si los campos requeridos no están llenos
    this.presentToast('Todos los campos son obligatorios', false);
  }
}

  // Método para verificar si los campos requeridos del taxi están llenos
  RequiredFieldsFilled(): boolean {
    return (
      this.taxiData.propietario &&
      this.taxiData.modelo &&
      this.taxiData.placa
      // Retorna true si todos los campos están llenos, de lo contrario, false
    );
  }

  // Método asincrónico para mostrar mensajes Toast
  async presentToast(message: string, success: boolean) {
    // Crea un Toast con el mensaje, duración, color y posición especificados
    const toast = await this.toastController.create({
      message: message,
      duration: 1000, // Duración en milisegundos
      color: success ? 'success' : 'danger', // Color del Toast
      position: 'bottom', // Posición en la pantalla (top, middle, bottom)
    });

    // Muestra el Toast en la pantalla
    toast.present();
  }
}
