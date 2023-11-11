import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaxiService {

  url='http://localhost/apiTaxi/';

  constructor(private http:HttpClient) { }

    login(usuario: any) {

      return this.http.post(`${this.url}login.php`, JSON.stringify(usuario));
  }
}
