import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaxiCreateService {
  private apiUrlCreate = 'http://localhost/apiTaxi/createdTaxi.php';

  constructor(private http: HttpClient, private toastController: ToastController) {}

  createTaxi(taxiData: any): Observable<any> {
    return this.http.post(this.apiUrlCreate, taxiData);
  }

  async presentToast(message: string, success: boolean) {
    const color = success ? 'success' : 'danger';

    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      color: color,
      position: 'middle',
      cssClass: 'custom-toast'
    });

    toast.present();
  }
}
