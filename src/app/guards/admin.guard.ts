import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivateFn } from '@angular/router';

export const adminGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  
  // Verificar si hay una sesión de admin activa
  const isAuthenticated = sessionStorage.getItem('adminAuthenticated') === 'true';
  
  if (isAuthenticated) {
    return true;
  } else {
    // Redirigir al login si no está autenticado
    router.navigate(['/login']);
    return false;
  }
};