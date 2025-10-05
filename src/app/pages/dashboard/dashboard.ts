import { Component, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface Service {
  id: number;
  nombre: string;
  descripcion: string;
  precio: string;
  estado: 'Activo' | 'Inactivo';
}

interface Client {
  id: number;
  nombre: string;
  email: string;
  telefono: string;
  empresa: string;
  fechaRegistro: string;
  estado: 'Activo' | 'Inactivo';
}

interface Sale {
  id: number;
  cliente: string;
  servicio: string;
  fecha: string;
  monto: string;
  estado: 'Completada' | 'Pendiente' | 'Cancelada';
}

interface Config {
  id: number;
  categoria: string;
  configuracion: string;
  valor: string;
  descripcion: string;
}

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnDestroy {
  searchTerm: string = '';
  activeSection: string = 'servicios';
  isMobileMenuOpen: boolean = false;
  
  services: Service[] = [
    {
      id: 1,
      nombre: 'Desarrollo de Aplicaciones Móviles',
      descripcion: 'Creación de aplicaciones para iOS y Android.',
      precio: '40,000,000.00',
      estado: 'Activo'
    },
    {
      id: 2,
      nombre: 'Diseño de Interfaces de Usuario (UI/UX)',
      descripcion: 'Diseño de interfaces intuitivas y atractivas.',
      precio: '15,000,000.00',
      estado: 'Activo'
    },
    {
      id: 3,
      nombre: 'Consultoría en Tecnología',
      descripcion: 'Asesoramiento estratégico en tecnología.',
      precio: '5,000,000.00',
      estado: 'Activo'
    },
    {
      id: 4,
      nombre: 'Mantenimiento de Software',
      descripcion: 'Soporte y actualizaciones para aplicaciones existentes.',
      precio: '30,000,000.00',
      estado: 'Inactivo'
    },
    {
      id: 5,
      nombre: 'Integración de Sistemas',
      descripcion: 'Conexión de diferentes sistemas de software.',
      precio: '10,000,000.00',
      estado: 'Activo'
    }
  ];
  
  filteredServices: Service[] = [...this.services];
  
  clients: Client[] = [
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
  
  sales: Sale[] = [
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
  
  configurations: Config[] = [
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
  
  filteredClients: Client[] = [...this.clients];
  filteredSales: Sale[] = [...this.sales];
  filteredConfigs: Config[] = [...this.configurations];
  
  constructor(private router: Router) {}
  
  selectSection(section: string) {
    this.activeSection = section;
    this.searchTerm = ''; // Limpiar búsqueda al cambiar sección
    
    // Resetear filtros según la sección
    switch(section) {
      case 'servicios':
        this.filteredServices = [...this.services];
        break;
      case 'clientes':
        this.filteredClients = [...this.clients];
        break;
      case 'ventas':
        this.filteredSales = [...this.sales];
        break;
      case 'configuracion':
        this.filteredConfigs = [...this.configurations];
        break;
    }
    
    console.log('Sección activa cambiada a:', section); // Para debug
  }
  
  filterContent() {
    const searchLower = this.searchTerm.toLowerCase();
    
    switch(this.activeSection) {
      case 'servicios':
        if (!this.searchTerm.trim()) {
          this.filteredServices = [...this.services];
        } else {
          this.filteredServices = this.services.filter(service => 
            service.nombre.toLowerCase().includes(searchLower) ||
            service.descripcion.toLowerCase().includes(searchLower)
          );
        }
        break;
        
      case 'clientes':
        if (!this.searchTerm.trim()) {
          this.filteredClients = [...this.clients];
        } else {
          this.filteredClients = this.clients.filter(client => 
            client.nombre.toLowerCase().includes(searchLower) ||
            client.email.toLowerCase().includes(searchLower) ||
            client.empresa.toLowerCase().includes(searchLower)
          );
        }
        break;
        
      case 'ventas':
        if (!this.searchTerm.trim()) {
          this.filteredSales = [...this.sales];
        } else {
          this.filteredSales = this.sales.filter(sale => 
            sale.cliente.toLowerCase().includes(searchLower) ||
            sale.servicio.toLowerCase().includes(searchLower)
          );
        }
        break;
        
      case 'configuracion':
        if (!this.searchTerm.trim()) {
          this.filteredConfigs = [...this.configurations];
        } else {
          this.filteredConfigs = this.configurations.filter(config => 
            config.configuracion.toLowerCase().includes(searchLower) ||
            config.categoria.toLowerCase().includes(searchLower)
          );
        }
        break;
    }
  }
  
  createItem() {
    switch(this.activeSection) {
      case 'servicios':
        console.log('Crear nuevo servicio');
        // Aquí iría un modal o formulario para crear servicio
        break;
      case 'clientes':
        console.log('Crear nuevo cliente');
        // Aquí iría un modal o formulario para crear cliente
        break;
      case 'ventas':
        console.log('Crear nueva venta');
        // Aquí iría un modal o formulario para crear venta
        break;
      case 'configuracion':
        console.log('Crear nueva configuración');
        // Aquí iría un modal o formulario para crear configuración
        break;
    }
  }
  
  editService(service: Service) {
    console.log('Editar servicio:', service);
  }
  
  editClient(client: Client) {
    console.log('Editar cliente:', client);
  }
  
  editSale(sale: Sale) {
    console.log('Editar venta:', sale);
  }
  
  editConfig(config: Config) {
    console.log('Editar configuración:', config);
  }
  
  getSectionTitle(): string {
    switch(this.activeSection) {
      case 'servicios': return 'Servicios';
      case 'clientes': return 'Clientes';
      case 'ventas': return 'Ventas';
      case 'configuracion': return 'Configuración';
      default: return 'Dashboard';
    }
  }
  
  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
  
  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }
  
  getCreateButtonText(): string {
    switch(this.activeSection) {
      case 'servicios': return 'Crear servicio';
      case 'clientes': return 'Crear cliente';
      case 'ventas': return 'Nueva venta';
      case 'configuracion': return 'Nueva configuración';
      default: return 'Crear';
    }
  }
  
  getSearchPlaceholder(): string {
    switch(this.activeSection) {
      case 'servicios': return 'Buscar servicios';
      case 'clientes': return 'Buscar clientes';
      case 'ventas': return 'Buscar ventas';
      case 'configuracion': return 'Buscar configuraciones';
      default: return 'Buscar';
    }
  }

  getSectionName(): string {
    switch (this.activeSection) {
      case 'servicios': return 'servicios';
      case 'clientes': return 'clientes';
      case 'ventas': return 'ventas';
      case 'configuracion': return 'configuración';
      default: return 'contenido';
    }
  }
  
  logout() {
    // Limpiar sesión de admin
    sessionStorage.removeItem('adminAuthenticated');
    
    // Redirigir al login
    this.router.navigate(['/login']);
  }
  
  ngOnDestroy() {
    // Limpiar sesión cuando se destruye el componente (navegación fuera del dashboard)
    sessionStorage.removeItem('adminAuthenticated');
  }
  
  @HostListener('window:beforeunload', ['$event'])
  beforeUnloadHandler(event: any) {
    // Limpiar sesión cuando se cierra la pestaña/ventana
    sessionStorage.removeItem('adminAuthenticated');
  }
}
