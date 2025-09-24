import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // 👈 IMPORTANTE
import { Footer } from "../footer/footer";
import { FormularioCotizacionComponent } from '../../componentes/formulario-cotizacion/formulario-cotizacion';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, Footer, FormularioCotizacionComponent], // 👈 AGREGA CommonModule
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  mostrarFormulario = false;

  constructor(private router: Router) {}

  requestQuote() {
  this.mostrarFormulario = !this.mostrarFormulario;

  setTimeout(() => {
    const formulario = document.getElementById('formulario-cotizacion');
    formulario?.scrollIntoView({ behavior: 'smooth' });
  }, 100);
}

}