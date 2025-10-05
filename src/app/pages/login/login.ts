import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onLogin() {
    // Limpiar espacios en blanco
    const username = this.username.trim();
    const password = this.password.trim();
    
    // Validación específica para admin
    if (username === 'admin' && password === 'admin') {
      // Establecer sesión de admin
      sessionStorage.setItem('adminAuthenticated', 'true');
      
      // Login exitoso, redirigir al dashboard
      this.router.navigate(['/dashboard']);
    } else if (!username || !password) {
      alert('Por favor ingrese usuario y contraseña');
    } else {
      alert('Credenciales incorrectas.\\nUsuario: admin\\nContraseña: admin');
    }
  }
}
