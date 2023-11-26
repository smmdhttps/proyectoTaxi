import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// @Injectable significa que esta clase es inyectable como servicio
@Injectable({
  providedIn: 'root',
})
export class TaxiEditService {
  // URL de la API para editar taxis
  private apiUrlEdit = 'http://localhost/apiTaxi/edit_taxis.php';

  // Constructor del servicio, recibe una instancia del servicio HttpClient
  constructor(private http: HttpClient) {}

  // Método para obtener información de un taxi por su ID
  getTaxi(taxiId: string): Observable<any> {
    // Construye la URL con el ID proporcionado
    const url = `${this.apiUrlEdit}?id=${taxiId}`;
    // Realiza una solicitud GET a la API y devuelve un Observable de datos
    return this.http.get(url);
  }

  // Método para editar un taxi con un ID
  editTaxi(taxiId: string, updatedData: any): Observable<any> {

    const url = `${this.apiUrlEdit}?id=${taxiId}`;
    // Realiza una solicitud POST a la API con los datos actualizados y devuelve los datos
    return this.http.post(url, updatedData);
  }
}
