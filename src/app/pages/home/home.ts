import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  constructor(private router: Router) {}

  requestQuote() {
    // Navegar a la página de contacto o abrir modal de cotización
    this.router.navigate(['/contact']);
  }
}
