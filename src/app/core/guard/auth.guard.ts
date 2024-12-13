import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../../core/services/api/auth.service';  // Asegúrate de importar tu servicio de autenticación

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    // Verificar si el usuario está autenticado
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      // Si no está autenticado, redirigir al login
      this.router.navigate(['/login']);  // Asegúrate de tener una ruta para el login
      return false;
    }
  }
}
