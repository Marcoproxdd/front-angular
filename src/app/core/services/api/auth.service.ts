// src/app/core/services/auth.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3008/v1/api/login'; // URL de tu servidor de backend

  constructor(private http: HttpClient) {}

  // Método para iniciar sesión
  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { username, password });
  }

  // Método para obtener el perfil del usuario autenticado
  getProfile(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(`${this.apiUrl}/profile`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  // Método para verificar si el usuario está autenticado
  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  // Método para cerrar sesión
  logout(): void {
    localStorage.removeItem('token');
  }
}
