import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Services } from './pages/services/services';
import { Contact } from './pages/contact/contact';
import { Login } from './pages/login/login';
import { ServiceDetails } from './pages/service-details/service-details';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: Home },
    { path: 'services', component: Services },
    { path: 'service-details', component: ServiceDetails },
    { path: 'contact', component: Contact },
    { path: 'login', component: Login },
    { path: '**', redirectTo: '/home' }
];
