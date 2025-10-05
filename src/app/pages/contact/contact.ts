import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DashboardService } from '../../service/dashboard-service';

interface Client {
  id: number;
  nombre: string;
  email: string;
  telefono: string;
  empresa: string;
  fechaRegistro: string;
  estado: 'Activo' | 'Inactivo' | 'Por contactar';
  servicio?: string;
  descripcion?: string;
}

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  formData = {
    name: '',
    email: '',
    telefono: '',
    empresa: '',
    service: '',
    description: ''
  };

  successMessage: string = '';
  errorMessage: string = '';

  constructor(private router: Router,
    private dashboardService: DashboardService
  ) {}

  onSubmit(event: Event) {
    event.preventDefault();
    
    // Validar campos requeridos
    if (!this.formData.name || !this.formData.email || !this.formData.service || !this.formData.description) {
      this.errorMessage = 'Por favor, completa todos los campos requeridos.';
      this.successMessage = '';
      setTimeout(() => this.errorMessage = '', 3000);
      return;
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.formData.email)) {
      this.errorMessage = 'Por favor, ingresa un correo electrónico válido.';
      this.successMessage = '';
      setTimeout(() => this.errorMessage = '', 3000);
      return;
    }

    // Obtener clientes existentes del localStorage
    //const storedClients = localStorage.getItem('clients') != null ? localStorage.getItem('clients') : this.dashboardService.getClients();
    const clients: Client[] = localStorage.getItem('clients') ? JSON.parse(localStorage.getItem('clients')!) : this.dashboardService.getClients();

    // Crear nuevo cliente
    const newClient: Client = {
      id: clients.length > 0 ? Math.max(...clients.map(c => c.id)) + 1 : 1,
      nombre: this.formData.name,
      email: this.formData.email,
      telefono: this.formData.telefono || 'No especificado',
      empresa: this.formData.empresa || 'No especificada',
      fechaRegistro: new Date().toISOString().split('T')[0],
      estado: 'Por contactar',
      servicio: this.getServiceName(this.formData.service),
      descripcion: this.formData.description
    };


    clients.push(newClient);

    // Guardar en localStorage
    localStorage.setItem('clients', JSON.stringify(clients));

    // Mostrar mensaje de éxito
    this.successMessage = '¡Solicitud enviada con éxito! Nos pondremos en contacto contigo pronto.';
    this.errorMessage = '';

    // Limpiar formulario
    this.resetForm();

    // Limpiar mensaje después de 5 segundos
    setTimeout(() => this.successMessage = '', 5000);
  }

  getServiceName(serviceKey: string): string {
    const serviceMap: { [key: string]: string } = {
      'desarrollo': 'Desarrollo de Software a Medida',
      'cloud': 'Soluciones en la Nube',
      'ciberseguridad': 'Ciberseguridad y Protección de Datos',
      'consultoria': 'Consultoría Tecnológica'
    };
    return serviceMap[serviceKey] || serviceKey;
  }

  resetForm() {
    this.formData = {
      name: '',
      email: '',
      telefono: '',
      empresa: '',
      service: '',
      description: ''
    };
  }
}
