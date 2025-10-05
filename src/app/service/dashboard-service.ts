import { Injectable } from '@angular/core';
import { Service } from '../interfaces/service.interface';
import { Client } from '../interfaces/client.interface';
import { Sale } from '../interfaces/sale.interface';
import { Config } from '../interfaces/config.interface';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private services: Service[] = [
    {
      id: 1,
      nombre: 'Desarrollo de Aplicaciones Móviles',
      descripcion: 'Creamos aplicaciones móviles innovadoras para iOS y Android.',
      descripcionCorta: 'Creamos aplicaciones móviles innovadoras para iOS y Android que transforman la manera en que tu negocio se conecta con sus clientes. Desarrollamos soluciones nativas y multiplataforma que garantizan el máximo rendimiento y una experiencia de usuario excepcional. Nuestro equipo de desarrolladores expertos utiliza las últimas tecnologías y frameworks del mercado para crear aplicaciones robustas, escalables y seguras.',
      descripcionCompleta: 'Desarrollamos aplicaciones móviles nativas y multiplataforma utilizando las últimas tecnologías como React Native, Flutter, Swift y Kotlin. Nuestro equipo especializado crea soluciones móviles que se adaptan perfectamente a las necesidades específicas de tu negocio, garantizando un rendimiento óptimo y una experiencia de usuario excepcional. Implementamos arquitecturas modernas, integraciones con APIs REST, sistemas de notificaciones push, pasarelas de pago seguras y análisis de comportamiento de usuarios. Seguimos las mejores prácticas de desarrollo móvil, incluyendo pruebas exhaustivas en múltiples dispositivos, optimización de rendimiento y cumplimiento de las directrices de las tiendas de aplicaciones. Nuestro proceso incluye diseño UX/UI profesional, desarrollo ágil con sprints iterativos, testing continuo y soporte post-lanzamiento para garantizar que tu aplicación se mantenga actualizada y competitiva en el mercado.',
      precio: '40,000,000.00',
      disponibilidad: 'Disponible',
      tiempoEntrega: '4 - 6 semanas',
      promocion: 'No',
      estado: 'Activo',
      imagenUrl: 'https://i.ibb.co/JRYzx9rm/img-1.png'
    },
    {
      id: 2,
      nombre: 'Consultoría en la Nube',
      descripcion: 'Optimizamos tu infraestructura con soluciones en la nube.',
      descripcionCorta: 'Optimizamos tu infraestructura tecnológica con soluciones avanzadas en la nube que reducen costos operativos y mejoran la escalabilidad de tu negocio. Nuestros consultores certificados te ayudan a migrar y optimizar tus sistemas en plataformas líderes como AWS, Microsoft Azure y Google Cloud Platform. Diseñamos arquitecturas cloud seguras, resilientes y de alto rendimiento adaptadas a tus necesidades específicas.',
      descripcionCompleta: 'Ofrecemos servicios de consultoría especializada en migración y optimización de infraestructura en la nube para empresas de todos los tamaños. Nuestro equipo de arquitectos cloud certificados te ayuda a aprovechar al máximo los servicios de AWS, Microsoft Azure y Google Cloud Platform. Realizamos análisis detallados de tu infraestructura actual, diseñamos estrategias de migración sin interrupciones, implementamos arquitecturas cloud nativas con microservicios y contenedores, configuramos sistemas de auto-escalado y alta disponibilidad, establecemos políticas de seguridad y cumplimiento normativo, optimizamos costos mediante análisis de uso y reservas estratégicas, implementamos soluciones de disaster recovery y backup automático, y proporcionamos capacitación continua a tu equipo técnico. Utilizamos metodologías probadas y frameworks como AWS Well-Architected Framework para garantizar que tu infraestructura cloud sea segura, eficiente, resiliente y optimizada en costos.',
      precio: '50,000,000.00',
      disponibilidad: 'Disponible',
      tiempoEntrega: '2 - 4 semanas',
      promocion: 'Sí',
      estado: 'Activo',
      imagenUrl: 'https://i.ibb.co/fG4w5Bhs/img-2.png'
    },
    {
      id: 3,
      nombre: 'Seguridad Cibernética',
      descripcion: 'Protegemos tu negocio de amenazas cibernéticas.',
      descripcionCorta: 'Protegemos tu negocio de amenazas cibernéticas avanzadas mediante soluciones de seguridad de clase empresarial. Nuestro equipo de expertos en ciberseguridad implementa estrategias defensivas multicapa que incluyen auditorías de seguridad exhaustivas, pruebas de penetración ética, monitoreo continuo de amenazas y respuesta rápida a incidentes. Protegemos tus datos críticos, aplicaciones y sistemas contra ataques maliciosos, ransomware y vulnerabilidades emergentes.',
      descripcionCompleta: 'Implementamos soluciones de seguridad avanzadas para proteger tu infraestructura tecnológica contra amenazas cibernéticas cada vez más sofisticadas. Nuestros servicios incluyen auditorías de seguridad completas que identifican vulnerabilidades en tu red, aplicaciones y sistemas; pruebas de penetración ética (pentesting) para simular ataques reales y evaluar tus defensas; implementación de sistemas de prevención y detección de intrusos (IDS/IPS); configuración de firewalls de próxima generación con inspección profunda de paquetes; despliegue de soluciones EDR (Endpoint Detection and Response) para proteger dispositivos finales; implementación de sistemas SIEM para correlación y análisis de eventos de seguridad; configuración de autenticación multifactor y gestión de identidades; cifrado de datos en reposo y en tránsito; establecimiento de políticas de seguridad y programas de concienciación para empleados; servicios de respuesta a incidentes 24/7; análisis forense digital en caso de brechas de seguridad; y cumplimiento de normativas como ISO 27001, GDPR y otras regulaciones específicas de tu industria.',
      precio: '30,000,000.00',
      disponibilidad: 'Disponible',
      tiempoEntrega: '3 - 5 semanas',
      promocion: 'No',
      estado: 'Activo',
      imagenUrl: 'https://i.ibb.co/SDL2HXSq/img-3.png'
    },
    {
      id: 4,
      nombre: 'Análisis de Datos',
      descripcion: 'Transformamos datos en información valiosa para tu negocio.',
      descripcionCorta: 'Transformamos datos en información valiosa y accionable para tu negocio mediante soluciones avanzadas de Business Intelligence y Analytics. Implementamos plataformas de análisis de datos que consolidan información de múltiples fuentes, generan visualizaciones interactivas y dashboards ejecutivos que facilitan la toma de decisiones estratégicas. Utilizamos técnicas de machine learning y análisis predictivo para identificar patrones, tendencias y oportunidades de negocio.',
      descripcionCompleta: 'Implementamos soluciones completas de Big Data y Business Intelligence que te permiten tomar decisiones informadas basadas en el análisis profundo de tus datos empresariales. Nuestros servicios incluyen diseño e implementación de data warehouses y data lakes para almacenar grandes volúmenes de datos estructurados y no estructurados; desarrollo de pipelines ETL/ELT para integrar datos de múltiples fuentes (CRM, ERP, bases de datos, APIs, archivos); creación de modelos de datos dimensionales optimizados para análisis; desarrollo de dashboards interactivos y reportes dinámicos utilizando herramientas como Power BI, Tableau, Looker y Qlik; implementación de soluciones de análisis en tiempo real para monitoreo operacional; desarrollo de modelos de machine learning para análisis predictivo, detección de anomalías y segmentación de clientes; análisis de comportamiento de usuarios mediante técnicas de web analytics; implementación de soluciones de gobierno de datos para garantizar calidad, consistencia y seguridad; capacitación de equipos en herramientas de análisis y cultura data-driven; y consultoría estratégica para identificar KPIs críticos y métricas de negocio relevantes.',
      precio: '25,000,000.00',
      disponibilidad: 'Disponible',
      tiempoEntrega: '3 - 4 semanas',
      promocion: 'No',
      estado: 'Activo',
      imagenUrl: 'https://i.ibb.co/fYgLmkkH/img-4.png'
    },
    {
      id: 5,
      nombre: 'Automatización de Procesos',
      descripcion: 'Automatizamos tareas repetitivas para aumentar la eficiencia.',
      descripcionCorta: 'Automatizamos tareas repetitivas y procesos manuales para aumentar dramáticamente la eficiencia operativa de tu empresa. Implementamos soluciones de RPA (Robotic Process Automation) que liberan a tu equipo de trabajos tediosos y propensos a errores, permitiéndoles enfocarse en actividades de mayor valor. Nuestras automatizaciones reducen costos operativos, mejoran la precisión, aceleran los tiempos de respuesta y aumentan la satisfacción de clientes y empleados.',
      descripcionCompleta: 'Diseñamos e implementamos soluciones completas de automatización de procesos empresariales (RPA) y workflows inteligentes que reducen costos operativos hasta en un 70% y mejoran significativamente la productividad de tu equipo. Utilizamos herramientas líderes como UiPath, Automation Anywhere, Power Automate y custom scripts para automatizar procesos en áreas como finanzas (conciliación bancaria, procesamiento de facturas, reportes), recursos humanos (onboarding, gestión de solicitudes, procesamiento de nómina), atención al cliente (clasificación de tickets, respuestas automáticas, seguimiento), ventas (generación de propuestas, actualización de CRM, seguimiento de leads), y operaciones (gestión de inventario, procesamiento de órdenes, reportes operacionales). Implementamos bots inteligentes que interactúan con múltiples sistemas, extraen y procesan datos, generan reportes automáticos y ejecutan reglas de negocio complejas. Nuestro proceso incluye análisis de procesos actuales, identificación de oportunidades de automatización con alto ROI, diseño de workflows optimizados, desarrollo e implementación de robots, pruebas exhaustivas, capacitación de usuarios y monitoreo continuo del rendimiento.',
      precio: '20,000,000.00',
      disponibilidad: 'Disponible',
      tiempoEntrega: '2 - 3 semanas',
      promocion: 'No',
      estado: 'Activo',
      imagenUrl: 'https://i.ibb.co/7dRHgmDc/img-5.png'
    },
    {
      id: 6,
      nombre: 'Diseño de Experiencia de Usuario',
      descripcion: 'Diseñamos interfaces intuitivas y atractivas para tus usuarios.',
      descripcionCorta: 'Diseñamos interfaces intuitivas, atractivas y centradas en el usuario que maximizan la satisfacción y engagement de tus clientes. Nuestro equipo de diseñadores UX/UI expertos crea experiencias digitales memorables mediante investigación profunda de usuarios, arquitectura de información estratégica, diseño visual moderno y pruebas de usabilidad exhaustivas. Transformamos productos digitales complejos en experiencias simples y deliciosas que impulsan conversiones y fidelización.',
      descripcionCompleta: 'Creamos experiencias digitales excepcionales y centradas en el usuario mediante un proceso integral que combina investigación, diseño estratégico y validación continua. Nuestros servicios incluyen investigación de usuarios mediante entrevistas, encuestas y análisis de comportamiento para entender necesidades profundas y puntos de dolor; desarrollo de personas y customer journey maps para visualizar la experiencia completa; arquitectura de información y wireframing para estructurar contenido de manera lógica e intuitiva; diseño de interfaces visuales modernas que reflejan tu identidad de marca siguiendo principios de diseño visual y jerarquía; creación de sistemas de diseño escalables con componentes reutilizables y guías de estilo; desarrollo de prototipos interactivos de alta fidelidad para validar conceptos; pruebas de usabilidad con usuarios reales para identificar problemas y oportunidades de mejora; diseño responsive que garantiza experiencias óptimas en todos los dispositivos; optimización de conversión (CRO) mediante análisis de embudos y A/B testing; diseño accesible que cumple con estándares WCAG; y consultoría continua para evolucionar tu producto digital basándose en métricas de uso y feedback de usuarios.',
      precio: '15,000,000.00',
      disponibilidad: 'Disponible',
      tiempoEntrega: '2 - 3 semanas',
      promocion: 'Sí',
      estado: 'Activo',
      imagenUrl: 'https://i.ibb.co/3yMn4qFM/img-6.png'
    },
    {
      id: 7,
      nombre: 'Soporte Técnico 24/7',
      descripcion: 'Ofrecemos soporte técnico continuo para resolver cualquier problema.',
      descripcionCorta: 'Ofrecemos soporte técnico profesional 24 horas al día, 7 días a la semana, 365 días al año para resolver cualquier incidencia técnica de manera rápida y eficiente. Nuestro equipo multilingüe de ingenieros certificados está siempre disponible para mantener tus sistemas operando sin interrupciones. Proporcionamos múltiples canales de contacto (teléfono, email, chat, portal web) con tiempos de respuesta garantizados según niveles de severidad y SLAs personalizados.',
      descripcionCompleta: 'Proveemos soporte técnico profesional ininterrumpido las 24 horas del día, los 7 días de la semana y los 365 días del año. Nuestro equipo global de ingenieros altamente capacitados y certificados está siempre disponible para resolver cualquier incidencia técnica de manera rápida, eficiente y profesional. Ofrecemos soporte multinivel con especialistas en diferentes áreas tecnológicas (infraestructura, aplicaciones, redes, seguridad, bases de datos); múltiples canales de contacto incluyendo teléfono, email, chat en vivo, sistema de tickets y portal de autoservicio; tiempos de respuesta garantizados mediante SLAs personalizados según la criticidad del incidente; monitoreo proactivo 24/7 de tu infraestructura para detectar y resolver problemas antes de que afecten a usuarios; gestión completa de incidentes siguiendo marcos como ITIL; escalamiento automático a ingenieros senior para casos complejos; base de conocimientos actualizada con soluciones a problemas comunes; reportes mensuales de incidencias y métricas de rendimiento; mantenimiento preventivo programado; actualizaciones y parches de seguridad; backup y recuperación ante desastres; y un equipo dedicado de account managers que aseguran tu satisfacción continua.',
      precio: '10,000,000.00',
      disponibilidad: 'Disponible',
      tiempoEntrega: 'Inmediato',
      promocion: 'No',
      estado: 'Activo',
      imagenUrl: 'https://i.ibb.co/dJfFZ8wt/img-7.png'
    },
    {
      id: 8,
      nombre: 'Integración de Sistemas',
      descripcion: 'Conectamos tus sistemas para un flujo de trabajo sin interrupciones.',
      descripcionCorta: 'Conectamos tus sistemas y aplicaciones empresariales para crear un ecosistema tecnológico cohesivo que elimina silos de información y optimiza flujos de trabajo. Integramos CRMs, ERPs, plataformas de e-commerce, sistemas de facturación, herramientas de marketing y cualquier aplicación que tu negocio utilice. Implementamos integraciones robustas mediante APIs REST, webhooks, conectores nativos y plataformas iPaaS que garantizan sincronización de datos en tiempo real.',
      descripcionCompleta: 'Integramos diferentes sistemas y aplicaciones empresariales para crear un ecosistema tecnológico cohesivo que mejora dramáticamente la eficiencia operativa y el flujo de información entre departamentos. Nuestros servicios de integración incluyen análisis detallado de tu arquitectura actual y mapeo de flujos de datos; diseño de arquitecturas de integración escalables y resilientes; implementación de integraciones mediante APIs RESTful, GraphQL, SOAP y protocolos modernos; desarrollo de conectores personalizados para sistemas legacy o aplicaciones propietarias; implementación de plataformas iPaaS (Integration Platform as a Service) como MuleSoft, Dell Boomi o Azure Logic Apps; configuración de Enterprise Service Bus (ESB) para orquestar comunicaciones complejas; implementación de patrones de integración como event-driven, pub/sub y message queuing; sincronización bidireccional de datos entre CRM, ERP, e-commerce, marketing automation y otros sistemas críticos; transformación y normalización de datos entre diferentes formatos; implementación de workflows automatizados que atraviesan múltiples sistemas; manejo robusto de errores y reintentos automáticos; monitoreo en tiempo real de integraciones con alertas proactivas; documentación completa de todas las integraciones; y soporte continuo para evolucionar las integraciones según cambien tus necesidades de negocio.',
      precio: '35,000,000.00',
      disponibilidad: 'Disponible',
      tiempoEntrega: '4 - 5 semanas',
      promocion: 'No',
      estado: 'Activo',
      imagenUrl: 'https://i.ibb.co/MymHCsrH/img-8.png'
    },
    {
      id: 9,
      nombre: 'Capacitación en Tecnología',
      descripcion: 'Capacitamos a tu equipo en las últimas tecnologías.',
      descripcionCorta: 'Capacitamos a tu equipo en las últimas tecnologías y mejores prácticas de la industria mediante programas de formación personalizados y hands-on. Nuestros instructores certificados y con amplia experiencia práctica diseñan cursos adaptados a las necesidades específicas de tu organización, cubriendo desde fundamentos hasta temas avanzados en desarrollo de software, cloud computing, DevOps, ciberseguridad, data science y más. Ofrecemos modalidades presenciales, virtuales y híbridas.',
      descripcionCompleta: 'Ofrecemos programas completos de capacitación tecnológica personalizados para mantener a tu equipo actualizado con las últimas tendencias, herramientas y metodologías del sector. Nuestros servicios incluyen evaluación inicial de competencias técnicas de tu equipo; diseño de planes de capacitación personalizados alineados con tus objetivos de negocio; cursos en múltiples áreas incluyendo desarrollo de software (Java, Python, JavaScript, .NET, mobile), arquitectura de software y microservicios, cloud computing (AWS, Azure, GCP), DevOps y CI/CD, contenedores y orquestación (Docker, Kubernetes), seguridad de aplicaciones y ethical hacking, bases de datos SQL y NoSQL, análisis de datos y machine learning, metodologías ágiles (Scrum, Kanban), design thinking y UX/UI; sesiones prácticas hands-on con proyectos reales; laboratorios virtuales para práctica segura; preparación para certificaciones técnicas reconocidas internacionalmente; workshops de actualización en tecnologías emergentes; mentoría uno-a-uno para desarrolladores; evaluaciones de progreso y certificados de completación; contenido actualizado constantemente según evoluciona la tecnología; modalidades flexibles (presencial, virtual, híbrida, autogestionada); y consultoría para establecer programas de desarrollo técnico continuo en tu organización.',
      precio: '5,000,000.00',
      disponibilidad: 'Disponible',
      tiempoEntrega: '1 - 2 semanas',
      promocion: 'No',
      estado: 'Activo',
      imagenUrl: 'https://i.ibb.co/Ps0fBs9J/img-9.png'
    },
    {
      id: 10,
      nombre: 'Mantenimiento de Infraestructura',
      descripcion: 'Mantenemos tu infraestructura tecnológica en perfecto estado.',
      descripcionCorta: 'Mantenemos tu infraestructura tecnológica en perfecto estado mediante servicios proactivos de mantenimiento preventivo y correctivo. Nuestro equipo especializado monitorea continuamente servidores, redes, bases de datos y aplicaciones críticas para detectar y resolver problemas antes de que impacten tu operación. Aplicamos actualizaciones de seguridad, optimizamos rendimiento, gestionamos capacidad y ejecutamos backups automatizados para garantizar disponibilidad del 99.9% y minimizar tiempos de inactividad.',
      descripcionCompleta: 'Proporcionamos servicios completos de mantenimiento preventivo y correctivo para garantizar el funcionamiento óptimo y continuo de tu infraestructura tecnológica, minimizando tiempos de inactividad y maximizando la disponibilidad de sistemas críticos. Nuestros servicios incluyen monitoreo 24/7 de infraestructura con alertas automáticas ante anomalías; mantenimiento preventivo programado de servidores físicos y virtuales; aplicación de parches de seguridad y actualizaciones de sistemas operativos; optimización continua de bases de datos (indexación, limpieza, tuning de queries); gestión de capacidad y planificación de crecimiento basada en tendencias de uso; backups automatizados diarios con pruebas regulares de restauración; gestión de almacenamiento y limpieza de datos obsoletos; monitoreo y optimización de rendimiento de aplicaciones; mantenimiento de infraestructura de red (switches, routers, firewalls); actualización de firmware y drivers; documentación actualizada de configuraciones y procedimientos; auditorías periódicas de infraestructura; gestión de licencias de software; reemplazo proactivo de hardware próximo a fin de vida útil; planes de disaster recovery actualizados y probados; reportes mensuales de salud de infraestructura con recomendaciones; y disponibilidad de equipo de respuesta rápida para emergencias críticas.',
      precio: '40,000,000.00',
      disponibilidad: 'Disponible',
      tiempoEntrega: 'Continuo',
      promocion: 'No',
      estado: 'Activo',
      imagenUrl: 'https://i.ibb.co/j900zvJz/img-10.png'
    }
  ];

  private clients: Client[] = [
    {
      id: 1,
      nombre: 'Carlos Mendoza',
      email: 'carlos.mendoza@empresa.com',
      telefono: '+57 300 123 4567',
      empresa: 'TechCorp S.A.S',
      fechaRegistro: '2024-01-15',
      estado: 'Activo'
    },
    {
      id: 2,
      nombre: 'Ana García',
      email: 'ana.garcia@startup.co',
      telefono: '+57 310 987 6543',
      empresa: 'InnovaStartup',
      fechaRegistro: '2024-02-20',
      estado: 'Activo'
    },
    {
      id: 3,
      nombre: 'Roberto Silva',
      email: 'roberto.silva@comercio.com',
      telefono: '+57 320 456 7890',
      empresa: 'ComercioDigital Ltda',
      fechaRegistro: '2024-03-10',
      estado: 'Inactivo'
    },
    {
      id: 4,
      nombre: 'María López',
      email: 'maria.lopez@fintech.co',
      telefono: '+57 315 234 5678',
      empresa: 'FinTech Solutions',
      fechaRegistro: '2024-04-05',
      estado: 'Activo'
    }
  ];

  private sales: Sale[] = [
    {
      id: 1,
      cliente: 'TechCorp S.A.S',
      servicio: 'Desarrollo de Aplicaciones Móviles',
      fecha: '2024-06-15',
      monto: '40,000,000.00',
      estado: 'Completada'
    },
    {
      id: 2,
      cliente: 'InnovaStartup',
      servicio: 'Diseño de Interfaces UI/UX',
      fecha: '2024-07-20',
      monto: '15,000,000.00',
      estado: 'Completada'
    },
    {
      id: 3,
      cliente: 'FinTech Solutions',
      servicio: 'Consultoría en Tecnología',
      fecha: '2024-08-10',
      monto: '5,000,000.00',
      estado: 'Pendiente'
    },
    {
      id: 4,
      cliente: 'ComercioDigital Ltda',
      servicio: 'Integración de Sistemas',
      fecha: '2024-09-05',
      monto: '10,000,000.00',
      estado: 'Cancelada'
    }
  ];

  private configurations: Config[] = [
    {
      id: 1,
      categoria: 'General',
      configuracion: 'Nombre de la Empresa',
      valor: 'Lumina Solutions',
      descripcion: 'Nombre oficial de la empresa'
    },
    {
      id: 2,
      categoria: 'General',
      configuracion: 'Email Corporativo',
      valor: 'contacto@luminasolutions.com',
      descripcion: 'Email principal de contacto'
    },
    {
      id: 3,
      categoria: 'Facturación',
      configuracion: 'Impuesto IVA',
      valor: '19%',
      descripcion: 'Porcentaje de IVA aplicado'
    },
    {
      id: 4,
      categoria: 'Seguridad',
      configuracion: 'Sesión Admin',
      valor: '30 minutos',
      descripcion: 'Tiempo de expiración de sesión'
    }
  ];

  getServices(): Service[] {
    return [...this.services];
  }

  getClients(): Client[] {
    return [...this.clients];
  }

  getSales(): Sale[] {
    return [...this.sales];
  }

  getConfigurations(): Config[] {
    return [...this.configurations];
  }

  addService(service: Service): void {
    this.services.push(service);
  }

  addClient(client: Client): void {
    this.clients.push(client);
  }

  addSale(sale: Sale): void {
    this.sales.push(sale);
  }

  addConfig(config: Config): void {
    this.configurations.push(config);
  }

  updateService(id: number, updatedService: Service): void {
    const index = this.services.findIndex(s => s.id === id);
    if (index !== -1) {
      this.services[index] = updatedService;
    }
  }

  updateClient(id: number, updatedClient: Client): void {
    const index = this.clients.findIndex(c => c.id === id);
    if (index !== -1) {
      this.clients[index] = updatedClient;
    }
  }

  updateSale(id: number, updatedSale: Sale): void {
    const index = this.sales.findIndex(s => s.id === id);
    if (index !== -1) {
      this.sales[index] = updatedSale;
    }
  }

  updateConfig(id: number, updatedConfig: Config): void {
    const index = this.configurations.findIndex(c => c.id === id);
    if (index !== -1) {
      this.configurations[index] = updatedConfig;
    }
  }

  updateServiceStatus(serviceId: number, newStatus: 'Activo' | 'Inactivo') {
    const service = this.services.find(s => s.id === serviceId);
    if (service) {
      service.estado = newStatus;
    }
  }
}
