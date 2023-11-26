// taxi-load.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaxiLoadService {
  private apiUrlLoad = 'http://localhost/apiTaxi/load_taxis.php';

  constructor(private http: HttpClient) {}

  loadTaxis(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrlLoad)
      .pipe(
        catchError((error) => {
          console.error('Error fetching taxis:', error);
          throw error;
        })
      );
  }

  eliminarTaxi(id: number): Observable<void> {
    const apiUrlEliminar = `http://localhost/apiTaxi/eliminar_taxi.php?id=${id}`;
    return this.http.delete<void>(apiUrlEliminar)
      .pipe(
        catchError((error) => {
          console.error('Error eliminando taxi:', error);
          throw error;
        })
      );
  }
}
