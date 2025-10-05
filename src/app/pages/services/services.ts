import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardService } from '../../service/dashboard-service';

@Component({
  selector: 'app-services',
  imports: [CommonModule, RouterModule],
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class Services {
  servicios: { id: number; img: string; title: string; description: string }[] = [];

  constructor(private dashboardService: DashboardService) {
    const storedServices = localStorage.getItem('services');
    const services: Array<{ id: number; estado: 'Activo' | 'Inactivo'; imagenUrl: string; nombre: string; descripcion: string }> = storedServices ? JSON.parse(storedServices) : this.dashboardService.getServices();
    this.servicios = services
      .filter(service => service.estado === 'Activo')
      .map(service => ({
        id: service.id,
        img: service.imagenUrl,
        title: service.nombre,
        description: service.descripcion
      }));
  }
}
