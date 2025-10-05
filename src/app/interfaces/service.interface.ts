export interface Service {
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