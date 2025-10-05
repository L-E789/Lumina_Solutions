import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Services } from './pages/services/services';
import { Contact } from './pages/contact/contact';
import { Login } from './pages/login/login';
import { ServiceDetails } from './pages/service-details/service-details';
import { Dashboard } from './pages/dashboard/dashboard';
import { adminGuard } from './guards/admin.guard';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: Home },
    { path: 'services', component: Services },
    { path: 'service-details/:id', component: ServiceDetails },
    { path: 'contact', component: Contact },
    { path: 'login', component: Login },
    { path: 'dashboard', component: Dashboard, canActivate: [adminGuard] },
    { path: '**', redirectTo: '/home' }
];
