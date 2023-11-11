import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TaxiService } from 'src/services/taxi.service';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss']
})
export class LoginPage {
  usuario={
    email:'sara.munozd@gmail.com',
    password:'123'
  }

  constructor(private router: Router, private taxiService:TaxiService, private Navctrl:NavController) {}

  login() {
    this.taxiService.login(this.usuario).subscribe((datos:any)=>{
      if (datos['resultado']=='OK') {
        setTimeout(() => {
          this.Navctrl.navigateRoot('/home');
        }, 200);
      }else{
        alert(datos['mensaje']);
      }
    })
    /* (if (this.email === 'usuario@ejemplo.com' && this.password === 'contraseña') {
      this.router.navigate(['./home']);
    } else {

    }) */
  }
}
