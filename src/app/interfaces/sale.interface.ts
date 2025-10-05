export interface Sale {
  id: number;
  cliente: string;
  servicio: string;
  fecha: string;
  monto: string;
  estado: 'Completada' | 'Pendiente' | 'Cancelada';
}