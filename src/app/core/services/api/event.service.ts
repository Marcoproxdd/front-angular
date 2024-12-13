import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Event } from '../../interfaces/api/event.interface';  // Asegúrate de tener esta interfaz correctamente definida

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private apiUrl = `${environment.apiUrl}/events/fetch`;

  constructor(private http: HttpClient) {}

  // Método para obtener los eventos desde el backend
  getEvents(): Observable<Event[]> {
    return this.http.get<{ data: Event[] }>(this.apiUrl).pipe(
      map((response) => response.data) // Extraer el array de eventos de la respuesta
    );
  }  

}
