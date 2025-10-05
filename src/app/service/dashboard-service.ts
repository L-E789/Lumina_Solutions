import { Injectable } from '@angular/core';
import { Service } from '../interfaces/service.interface';
import { Client } from '../interfaces/client.interface';
import { Sale } from '../interfaces/sale.interface';
import { Config } from '../interfaces/config.interface';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private services: Service[] = [
    {
      id: 1,
      nombre: 'Desarrollo de Aplicaciones Móviles',
      descripcion: 'Creamos aplicaciones móviles innovadoras para iOS y Android.',
      precio: '40,000,000.00',
      estado: 'Activo',
      imagenUrl: 'https://i.ibb.co/JRYzx9rm/img-1.png'
    },
    {
      id: 2,
      nombre: 'Consultoría en la Nube',
      descripcion: 'Optimizamos tu infraestructura con soluciones en la nube.',
      precio: '50,000,000.00',
      estado: 'Activo',
      imagenUrl: 'https://i.ibb.co/fG4w5Bhs/img-2.png'
    },
    {
      id: 3,
      nombre: 'Seguridad Cibernética',
      descripcion: 'Protegemos tu negocio de amenazas cibernéticas.',
      precio: '30,000,000.00',
      estado: 'Activo',
      imagenUrl: 'https://i.ibb.co/SDL2HXSq/img-3.png'
    },
    {
      id: 4,
      nombre: 'Análisis de Datos',
      descripcion: 'Transformamos datos en información valiosa para tu negocio.',
      precio: '25,000,000.00',
      estado: 'Activo',
      imagenUrl: 'https://i.ibb.co/fYgLmkkH/img-4.png'
    },
    {
      id: 5,
      nombre: 'Automatización de Procesos',
      descripcion: 'Automatizamos tareas repetitivas para aumentar la eficiencia.',
      precio: '20,000,000.00',
      estado: 'Activo',
      imagenUrl: 'https://i.ibb.co/7dRHgmDc/img-5.png'
    },
    {
      id: 6,
      nombre: 'Diseño de Experiencia de Usuario',
      descripcion: 'Diseñamos interfaces intuitivas y atractivas para tus usuarios.',
      precio: '15,000,000.00',
      estado: 'Activo',
      imagenUrl: 'https://i.ibb.co/3yMn4qFM/img-6.png'
    },
    {
      id: 7,
      nombre: 'Soporte Técnico 24/7',
      descripcion: 'Ofrecemos soporte técnico continuo para resolver cualquier problema.',
      precio: '10,000,000.00',
      estado: 'Activo',
      imagenUrl: 'https://i.ibb.co/dJfFZ8wt/img-7.png'
    },
    {
      id: 8,
      nombre: 'Integración de Sistemas',
      descripcion: 'Conectamos tus sistemas para un flujo de trabajo sin interrupciones.',
      precio: '35,000,000.00',
      estado: 'Activo',
      imagenUrl: 'https://i.ibb.co/MymHCsrH/img-8.png'
    },
    {
      id: 9,
      nombre: 'Capacitación en Tecnología',
      descripcion: 'Capacitamos a tu equipo en las últimas tecnologías.',
      precio: '5,000,000.00',
      estado: 'Activo',
      imagenUrl: 'https://i.ibb.co/Ps0fBs9J/img-9.png'
    },
    {
      id: 10,
      nombre: 'Mantenimiento de Infraestructura',
      descripcion: 'Mantenemos tu infraestructura tecnológica en perfecto estado.',
      precio: '40,000,000.00',
      estado: 'Activo',
      imagenUrl: 'https://i.ibb.co/j900zvJz/img-10.png'
    }
  ];

  private clients: Client[] = [
    {
      id: 1,
      nombre: 'Carlos Mendoza',
      email: 'carlos.mendoza@empresa.com',
      telefono: '+57 300 123 4567',
      empresa: 'TechCorp S.A.S',
      fechaRegistro: '2024-01-15',
      estado: 'Activo'
    },
    {
      id: 2,
      nombre: 'Ana García',
      email: 'ana.garcia@startup.co',
      telefono: '+57 310 987 6543',
      empresa: 'InnovaStartup',
      fechaRegistro: '2024-02-20',
      estado: 'Activo'
    },
    {
      id: 3,
      nombre: 'Roberto Silva',
      email: 'roberto.silva@comercio.com',
      telefono: '+57 320 456 7890',
      empresa: 'ComercioDigital Ltda',
      fechaRegistro: '2024-03-10',
      estado: 'Inactivo'
    },
    {
      id: 4,
      nombre: 'María López',
      email: 'maria.lopez@fintech.co',
      telefono: '+57 315 234 5678',
      empresa: 'FinTech Solutions',
      fechaRegistro: '2024-04-05',
      estado: 'Activo'
    }
  ];

  private sales: Sale[] = [
    {
      id: 1,
      cliente: 'TechCorp S.A.S',
      servicio: 'Desarrollo de Aplicaciones Móviles',
      fecha: '2024-06-15',
      monto: '40,000,000.00',
      estado: 'Completada'
    },
    {
      id: 2,
      cliente: 'InnovaStartup',
      servicio: 'Diseño de Interfaces UI/UX',
      fecha: '2024-07-20',
      monto: '15,000,000.00',
      estado: 'Completada'
    },
    {
      id: 3,
      cliente: 'FinTech Solutions',
      servicio: 'Consultoría en Tecnología',
      fecha: '2024-08-10',
      monto: '5,000,000.00',
      estado: 'Pendiente'
    },
    {
      id: 4,
      cliente: 'ComercioDigital Ltda',
      servicio: 'Integración de Sistemas',
      fecha: '2024-09-05',
      monto: '10,000,000.00',
      estado: 'Cancelada'
    }
  ];

  private configurations: Config[] = [
    {
      id: 1,
      categoria: 'General',
      configuracion: 'Nombre de la Empresa',
      valor: 'Lumina Solutions',
      descripcion: 'Nombre oficial de la empresa'
    },
    {
      id: 2,
      categoria: 'General',
      configuracion: 'Email Corporativo',
      valor: 'contacto@luminasolutions.com',
      descripcion: 'Email principal de contacto'
    },
    {
      id: 3,
      categoria: 'Facturación',
      configuracion: 'Impuesto IVA',
      valor: '19%',
      descripcion: 'Porcentaje de IVA aplicado'
    },
    {
      id: 4,
      categoria: 'Seguridad',
      configuracion: 'Sesión Admin',
      valor: '30 minutos',
      descripcion: 'Tiempo de expiración de sesión'
    }
  ];

  getServices(): Service[] {
    return [...this.services];
  }

  getClients(): Client[] {
    return [...this.clients];
  }

  getSales(): Sale[] {
    return [...this.sales];
  }

  getConfigurations(): Config[] {
    return [...this.configurations];
  }

  addService(service: Service): void {
    this.services.push(service);
  }

  addClient(client: Client): void {
    this.clients.push(client);
  }

  addSale(sale: Sale): void {
    this.sales.push(sale);
  }

  addConfig(config: Config): void {
    this.configurations.push(config);
  }

  updateService(id: number, updatedService: Service): void {
    const index = this.services.findIndex(s => s.id === id);
    if (index !== -1) {
      this.services[index] = updatedService;
    }
  }

  updateClient(id: number, updatedClient: Client): void {
    const index = this.clients.findIndex(c => c.id === id);
    if (index !== -1) {
      this.clients[index] = updatedClient;
    }
  }

  updateSale(id: number, updatedSale: Sale): void {
    const index = this.sales.findIndex(s => s.id === id);
    if (index !== -1) {
      this.sales[index] = updatedSale;
    }
  }

  updateConfig(id: number, updatedConfig: Config): void {
    const index = this.configurations.findIndex(c => c.id === id);
    if (index !== -1) {
      this.configurations[index] = updatedConfig;
    }
  }

  updateServiceStatus(serviceId: number, newStatus: 'Activo' | 'Inactivo') {
    const service = this.services.find(s => s.id === serviceId);
    if (service) {
      service.estado = newStatus;
    }
  }
}
