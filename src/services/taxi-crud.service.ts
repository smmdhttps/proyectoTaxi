import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaxiCrudService {
  apiUrl = 'http://localhost/apiTaxi/apiTaxis.php';

  constructor(private http: HttpClient) { }

  // Obtener todos los taxis
  getTaxis(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Obtener un taxi por ID
  getTaxi(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Crear un nuevo taxi
  createTaxi(newTaxi: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, newTaxi);
  }
  // Actualizar un taxi existente
  updateTaxi(id: number, taxi: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, taxi);
  }

  // Eliminar un taxi
  deleteTaxi(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
