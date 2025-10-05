import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DashboardService } from '../../service/dashboard-service';
import { PopupComponent } from '../../components/popup/popup.component';
import { ChangeStatusPopupComponent } from '../../components/change-status-popup/change-status-popup.component';

interface Service {
  id: number;
  nombre: string;
  descripcion: string;
  descripcionCorta?: string;
  descripcionCompleta?: string;
  precio: string;
  disponibilidad?: string;
  tiempoEntrega?: string;
  promocion?: string;
  estado: 'Activo' | 'Inactivo';
  imagenUrl: string;
}

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
  imports: [CommonModule, FormsModule, PopupComponent, ChangeStatusPopupComponent],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit, OnDestroy {
  searchTerm: string = '';
  activeSection: string = 'servicios';
  isMobileMenuOpen: boolean = false;
  isPopupVisible: boolean = false;
  popupTitle: string = '';
  isEditMode: boolean = false;
  isChangeStatusPopupVisible: boolean = false;
  currentStatus: 'Activo' | 'Inactivo' = 'Activo';
  isInfoPopupVisible: boolean = false;
  
  services: Service[] = [];
  filteredServices: Service[] = [];

  clients: Client[] = [];
  filteredClients: Client[] = [];

  sales: Sale[] = [];
  filteredSales: Sale[] = [];

  configurations: Config[] = [];
  filteredConfigs: Config[] = [];

  // Formulario para el popup
  formData: any = {
    id: 0,
    nombre: '',
    descripcion: '',
    descripcionCorta: '',
    descripcionCompleta: '',
    precio: '',
    disponibilidad: 'Disponible',
    tiempoEntrega: '',
    promocion: 'No',
    estado: 'Activo',
    imagenUrl: '',
    email: '',
    telefono: '',
    empresa: '',
    fechaRegistro: '',
    cliente: '',
    servicio: '',
    fecha: '',
    monto: '',
    categoria: '',
    configuracion: '',
    valor: ''
  };
  
  selectedClient: Client | null = null;
  
  constructor(private router: Router, private dashboardService: DashboardService) {
    this.loadData();
  }
  
  ngOnInit() {
    // Recargar datos cuando el componente se inicializa
    this.loadData();
  }
  
  loadData() {
    const storedServices = localStorage.getItem('services');
    this.services = storedServices ? JSON.parse(storedServices) : this.dashboardService.getServices();
    this.filteredServices = [...this.services];

    const storedClients = localStorage.getItem('clients');
    this.clients = storedClients ? JSON.parse(storedClients) : this.dashboardService.getClients();
    this.filteredClients = [...this.clients];

    const storedSales = localStorage.getItem('sales');
    this.sales = storedSales ? JSON.parse(storedSales) : this.dashboardService.getSales();
    this.filteredSales = [...this.sales];

    const storedConfigurations = localStorage.getItem('configurations');
    this.configurations = storedConfigurations ? JSON.parse(storedConfigurations) : this.dashboardService.getConfigurations();
    this.filteredConfigs = [...this.configurations];
  }
  
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
    this.isEditMode = false;
    this.resetFormData();
    switch(this.activeSection) {
      case 'servicios':
        this.popupTitle = 'Crear nuevo servicio';
        this.isPopupVisible = true;
        break;
      case 'clientes':
        this.popupTitle = 'Crear nuevo cliente';
        this.isPopupVisible = true;
        break;
      case 'ventas':
        this.popupTitle = 'Crear nueva venta';
        this.isPopupVisible = true;
        break;
      case 'configuracion':
        this.popupTitle = 'Crear nueva configuración';
        this.isPopupVisible = true;
        break;
    }
  }
  
  closePopup() {
    this.isPopupVisible = false;
    this.resetFormData();
  }
  
  editService(service: Service) {
    this.isEditMode = true;
    this.popupTitle = 'Editar servicio';
    this.formData = { ...service };
    this.activeSection = 'servicios';
    this.isPopupVisible = true;
  }
  
  editClient(client: Client) {
    this.isEditMode = true;
    this.popupTitle = 'Editar cliente';
    const selectedClient = this.clients.find(c => c.id === client.id); // Find client by ID
    if (selectedClient) {
      this.formData = { ...selectedClient };
    }
    this.activeSection = 'clientes';
    this.isPopupVisible = true;
    this.isInfoPopupVisible = false; // Ensure info popup is not triggered
  }
  
  editSale(sale: Sale) {
    this.isEditMode = true;
    this.popupTitle = 'Editar venta';
    this.formData = { ...sale };
    this.activeSection = 'ventas';
    this.isPopupVisible = true;
  }
  
  editConfig(config: Config) {
    this.isEditMode = true;
    this.popupTitle = 'Editar configuración';
    this.formData = { ...config };
    this.activeSection = 'configuracion';
    this.isPopupVisible = true;
  }

  saveItem() {
    if (this.isEditMode) {
      // Update existing item based on active section
      switch(this.activeSection) {
        case 'servicios':
          const serviceIndex = this.services.findIndex(service => service.id === this.formData.id);
          if (serviceIndex !== -1) {
            this.services[serviceIndex] = { ...this.formData };
            this.filteredServices = [...this.services];
            localStorage.setItem('services', JSON.stringify(this.services));
          }
          break;
        case 'clientes':
          const clientIndex = this.clients.findIndex(client => client.id === this.formData.id);
          if (clientIndex !== -1) {
            this.clients[clientIndex] = { ...this.formData };
            this.filteredClients = [...this.clients];
            localStorage.setItem('clients', JSON.stringify(this.clients));
          }
          break;
        case 'ventas':
          const saleIndex = this.sales.findIndex(sale => sale.id === this.formData.id);
          if (saleIndex !== -1) {
            this.sales[saleIndex] = { ...this.formData };
            this.filteredSales = [...this.sales];
            localStorage.setItem('sales', JSON.stringify(this.sales));
          }
          break;
        case 'configuracion':
          const configIndex = this.configurations.findIndex(config => config.id === this.formData.id);
          if (configIndex !== -1) {
            this.configurations[configIndex] = { ...this.formData };
            this.filteredConfigs = [...this.configurations];
            localStorage.setItem('configurations', JSON.stringify(this.configurations));
          }
          break;
      }
    } else {
      // Add new item based on active section
      switch(this.activeSection) {
        case 'servicios':
          const newServiceId = this.services.length > 0 ? Math.max(...this.services.map(s => s.id)) + 1 : 1;
          this.services.push({ ...this.formData, id: newServiceId });
          this.filteredServices = [...this.services];
          localStorage.setItem('services', JSON.stringify(this.services));
          break;
        case 'clientes':
          const newClientId = this.clients.length > 0 ? Math.max(...this.clients.map(c => c.id)) + 1 : 1;
          this.clients.push({ ...this.formData, id: newClientId });
          this.filteredClients = [...this.clients];
          localStorage.setItem('clients', JSON.stringify(this.clients));
          break;
        case 'ventas':
          const newSaleId = this.sales.length > 0 ? Math.max(...this.sales.map(s => s.id)) + 1 : 1;
          this.sales.push({ ...this.formData, id: newSaleId });
          this.filteredSales = [...this.sales];
          localStorage.setItem('sales', JSON.stringify(this.sales));
          break;
        case 'configuracion':
          const newConfigId = this.configurations.length > 0 ? Math.max(...this.configurations.map(c => c.id)) + 1 : 1;
          this.configurations.push({ ...this.formData, id: newConfigId });
          this.filteredConfigs = [...this.configurations];
          localStorage.setItem('configurations', JSON.stringify(this.configurations));
          break;
      }
    }
    this.isPopupVisible = false;
    this.resetFormData();
  }

  addItem() {
    switch(this.activeSection) {
      case 'servicios':
        const newService: Service = {
          id: this.services.length + 1,
          nombre: this.formData.nombre,
          descripcion: this.formData.descripcion,
          precio: this.formData.precio,
          estado: this.formData.estado,
          imagenUrl: this.formData.imagenUrl || ''
        };
        this.dashboardService.addService(newService);
        this.services = this.dashboardService.getServices();
        this.filteredServices = [...this.services];
        break;
      case 'clientes':
        const newClient: Client = {
          id: this.clients.length + 1,
          nombre: this.formData.nombre,
          email: this.formData.email,
          telefono: this.formData.telefono,
          empresa: this.formData.empresa,
          fechaRegistro: new Date().toISOString().split('T')[0],
          estado: this.formData.estado
        };
        this.dashboardService.addClient(newClient);
        this.clients = this.dashboardService.getClients();
        this.filteredClients = [...this.clients];
        break;
      case 'ventas':
        const newSale: Sale = {
          id: this.sales.length + 1,
          cliente: this.formData.cliente,
          servicio: this.formData.servicio,
          fecha: this.formData.fecha,
          monto: this.formData.monto,
          estado: this.formData.estado
        };
        this.dashboardService.addSale(newSale);
        this.sales = this.dashboardService.getSales();
        this.filteredSales = [...this.sales];
        break;
      case 'configuracion':
        const newConfig: Config = {
          id: this.configurations.length + 1,
          categoria: this.formData.categoria,
          configuracion: this.formData.configuracion,
          valor: this.formData.valor,
          descripcion: this.formData.descripcion
        };
        this.dashboardService.addConfig(newConfig);
        this.configurations = this.dashboardService.getConfigurations();
        this.filteredConfigs = [...this.configurations];
        break;
    }
    this.closePopup();
  }

  updateItem() {
    switch(this.activeSection) {
      case 'servicios':
        this.dashboardService.updateService(this.formData.id, this.formData);
        this.services = this.dashboardService.getServices();
        this.filteredServices = [...this.services];
        break;
      case 'clientes':
        this.dashboardService.updateClient(this.formData.id, this.formData);
        this.clients = this.dashboardService.getClients();
        this.filteredClients = [...this.clients];
        break;
      case 'ventas':
        this.dashboardService.updateSale(this.formData.id, this.formData);
        this.sales = this.dashboardService.getSales();
        this.filteredSales = [...this.sales];
        break;
      case 'configuracion':
        this.dashboardService.updateConfig(this.formData.id, this.formData);
        this.configurations = this.dashboardService.getConfigurations();
        this.filteredConfigs = [...this.configurations];
        break;
    }
    this.closePopup();
  }

  resetFormData() {
    this.formData = {
      id: 0,
      nombre: '',
      descripcion: '',
      descripcionCorta: '',
      descripcionCompleta: '',
      precio: '',
      disponibilidad: 'Disponible',
      tiempoEntrega: '',
      promocion: 'No',
      estado: 'Activo',
      imagenUrl: '',
      email: '',
      telefono: '',
      empresa: '',
      fechaRegistro: '',
      cliente: '',
      servicio: '',
      fecha: '',
      monto: '',
      categoria: '',
      configuracion: '',
      valor: ''
    };
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

  toggleServiceStatus(service: Service) {
    const confirmation = confirm(`¿Estás seguro de que deseas cambiar el estado del servicio "${service.nombre}" a ${service.estado === 'Activo' ? 'Inactivo' : 'Activo'}?`);
    if (confirmation) {
      const updatedStatus = service.estado === 'Activo' ? 'Inactivo' : 'Activo';
      service.estado = updatedStatus;
      this.dashboardService.updateServiceStatus(service.id, updatedStatus);
    }
  }

  openChangeStatusPopup(service: Service) {
    this.currentStatus = service.estado;
    this.formData.id = service.id;
    this.isChangeStatusPopupVisible = true;
  }

  handleStatusChange(newStatus: 'Activo' | 'Inactivo') {
    const serviceToUpdate = this.services.find(service => service.id === this.formData.id);
    if (serviceToUpdate) {
      serviceToUpdate.estado = newStatus;
      this.filteredServices = [...this.services];
      localStorage.setItem('services', JSON.stringify(this.services));
    }
    this.isChangeStatusPopupVisible = false;
  }

  closeChangeStatusPopup() {
    this.isChangeStatusPopupVisible = false;
  }

  // Function to display detailed client information in the popup
  showClientInfo(client: Client) {
    if (client.estado === 'Por contactar') {
      this.selectedClient = client; // Store the selected client data
      this.isInfoPopupVisible = true; // Show the info popup
      this.isPopupVisible = false; // Ensure edit popup is not triggered
    }
  }

  closeInfoPopup() {
    this.isInfoPopupVisible = false;
    this.selectedClient = null;
  }
}
