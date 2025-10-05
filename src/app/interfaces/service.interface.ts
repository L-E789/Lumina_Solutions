export interface Service {
  id: number;
  nombre: string;
  descripcion: string;
  precio: string;
  estado: 'Activo' | 'Inactivo';
  imagenUrl: string;
}