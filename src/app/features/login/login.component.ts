import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login(): void {
    localStorage.setItem('user', JSON.stringify({ username: this.username }));
    this.router.navigate(['/home']); // Redirige a la página principal
  }
}
