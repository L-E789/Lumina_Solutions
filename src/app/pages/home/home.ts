import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Footer } from "../footer/footer";

@Component({
  selector: 'app-home',
  imports: [Footer],
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
