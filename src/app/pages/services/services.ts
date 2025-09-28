import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  imports: [CommonModule],
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class Services {
  servicios = [
    {
      img: '/servicios/img-1.png',
      title: 'Desarrollo de Aplicaciones Móviles',
      description: 'Creamos aplicaciones móviles innovadoras para iOS y Android.'
    },
    {
      img: '/servicios/img-2.png',
      title: 'Consultoría en la Nube',
      description: 'Optimizamos tu infraestructura con soluciones en la nube.'
    },
    {
      img: '/servicios/img-3.png',
      title: 'Seguridad Cibernética',
      description: 'Protegemos tu negocio de amenazas cibernéticas.'
    },
    {
      img: '/servicios/img-4.png',
      title: 'Análisis de Datos',
      description: 'Transformamos datos en información valiosa para tu negocio.'
    },
    {
      img: '/servicios/img-5.png',
      title: 'Automatización de Procesos',
      description: 'Automatizamos tareas repetitivas para aumentar la eficiencia.'
    },
    {
      img: '/servicios/img-6.png',
      title: 'Diseño de Experiencia de Usuario',
      description: 'Diseñamos interfaces intuitivas y atractivas para tus usuarios.'
    },
    {
      img: '/servicios/img-7.png',
      title: 'Soporte Técnico 24/7',
      description: 'Ofrecemos soporte técnico continuo para resolver cualquier problema.'
    },
    {
      img: '/servicios/img-8.png',
      title: 'Integración de Sistemas',
      description: 'Conectamos tus sistemas para un flujo de trabajo sin interrupciones.'
    },
    {
      img: '/servicios/img-9.png',
      title: 'Capacitación en Tecnología',
      description: 'Capacitamos a tu equipo en las últimas tecnologías.'
    },
    {
      img: '/servicios/img-10.png',
      title: 'Mantenimiento de Infraestructura',
      description: 'Mantenemos tu infraestructura tecnológica en perfecto estado.'
    }
  ]


}
