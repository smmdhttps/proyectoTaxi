import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AcercaDeNosotrosPage } from '../acerca-de-nosotros/acerca-de-nosotros.page'; // Ajusta la ruta según tu estructura

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  async openAboutUsModal() {
    const modal = await this.modalController.create({
      component: AcercaDeNosotrosPage,
      cssClass: 'my-custom-modal'
    });

    return await modal.present();
  }
}
