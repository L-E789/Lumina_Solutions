import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { DashboardService } from '../../service/dashboard-service';
import { Service } from '../../interfaces/service.interface';

@Component({
  selector: 'app-service-details',
  imports: [CommonModule],
  templateUrl: './service-details.html',
  styleUrl: './service-details.css'
})
export class ServiceDetails implements OnInit {
  service: Service | null = null;
  serviceNotFound: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dashboardService: DashboardService
  ) {}

  ngOnInit() {
    const serviceId = Number(this.route.snapshot.paramMap.get('id'));
    
    if (serviceId) {
      this.loadService(serviceId);
    } else {
      this.serviceNotFound = true;
    }
  }

  loadService(id: number) {
    // Try to load from localStorage first
    const storedServices = localStorage.getItem('services');
    const services: Service[] = storedServices 
      ? JSON.parse(storedServices) 
      : this.dashboardService.getServices();
    
    this.service = services.find(s => s.id === id) || null;
    
    if (!this.service) {
      this.serviceNotFound = true;
    }
  }

  goBack() {
    this.router.navigate(['/services']);
  }
}
