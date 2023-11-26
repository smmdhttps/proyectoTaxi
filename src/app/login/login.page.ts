import { Component } from '@angular/core';
import { TaxiService } from 'src/services/taxi.service';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss']
})
export class LoginPage {
  //Muestra el usuario en los
  usuario = {
    email: 'sara.munozd@gmail.com',
    password: '123'
  };

  constructor(
    private taxiService: TaxiService,
    private Navctrl: NavController,
    private alertController: AlertController
  ) {}

  async login() {
    this.taxiService.login(this.usuario).subscribe((datos: any) => {
      if (datos['resultado'] === 'OK') {
        setTimeout(() => {
          this.Navctrl.navigateRoot('/home');
        }, 200);
      } else {
        this.presentAlert(datos['mensaje']);
      }
    });
  }

  async presentAlert(mensaje: string) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: mensaje,
      buttons: ['OK']
    });

    await alert.present();
  }
}
