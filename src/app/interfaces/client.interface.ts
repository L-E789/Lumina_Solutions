export interface Client {
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