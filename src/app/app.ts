import { Component, signal } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { Header } from "./pages/header/header";
import { Footer } from "./pages/footer/footer";
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('lumina_solutions');
  isDashboardRoute = false;
  
  constructor(private router: Router) {
    // Escuchar cambios de ruta para ocultar header/footer en dashboard
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.isDashboardRoute = event.urlAfterRedirects === '/dashboard';
    });
  }
}
