# Lumina Solutions - Angular Project

## Descripción
Este proyecto utiliza Angular para desarrollar una aplicación web moderna y escalable. Angular es un framework de desarrollo frontend basado en TypeScript que permite crear aplicaciones dinámicas y de alto rendimiento.

## Requisitos Previos
Antes de iniciar el proyecto, asegúrate de tener instalados los siguientes requisitos:

### Windows
1. **Node.js**: Descarga e instala Node.js desde [nodejs.org](https://nodejs.org/).
2. **Angular CLI**: Instala Angular CLI ejecutando el siguiente comando en PowerShell:
   ```powershell
   npm install -g @angular/cli
   ```
3. **Git**: Descarga e instala Git desde [git-scm.com](https://git-scm.com/).

### Linux
1. **Node.js**: Instala Node.js utilizando el gestor de paquetes de tu distribución:
   ```bash
   sudo apt update
   sudo apt install nodejs npm
   ```
2. **Angular CLI**: Instala Angular CLI ejecutando el siguiente comando:
   ```bash
   npm install -g @angular/cli
   ```
3. **Git**: Instala Git utilizando el gestor de paquetes de tu distribución:
   ```bash
   sudo apt install git
   ```

## Instalación del Proyecto
1. Clona el repositorio:
   ```bash
   git clone <URL-del-repositorio>
   ```
2. Navega al directorio del proyecto:
   ```bash
   cd lumina_solutions
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```

## Comandos para Iniciar el Proyecto
### Windows
1. Abre PowerShell y navega al directorio del proyecto.
2. Ejecuta el siguiente comando para iniciar el servidor de desarrollo:
   ```powershell
   ng serve
   ```
3. Abre tu navegador y accede a `http://localhost:4200`.

### Linux
1. Abre la terminal y navega al directorio del proyecto.
2. Ejecuta el siguiente comando para iniciar el servidor de desarrollo:
   ```bash
   ng serve
   ```
3. Abre tu navegador y accede a `http://localhost:4200`.

## Estructura del Proyecto
- **src/**: Contiene el código fuente de la aplicación.
- **angular.json**: Archivo de configuración de Angular.
- **package.json**: Lista de dependencias y scripts del proyecto.
- **README.md**: Documentación del proyecto.

## Buenas Prácticas con Angular
1. **Modularización**: Divide tu aplicación en módulos para mantener el código organizado.
2. **Componentes Reutilizables**: Crea componentes reutilizables para evitar duplicación de código.
3. **Servicios**: Utiliza servicios para manejar la lógica de negocio y las llamadas a APIs.
4. **Rutas**: Configura rutas en `app-routing.module.ts` para gestionar la navegación.
5. **Pruebas**: Escribe pruebas unitarias utilizando Jasmine y Karma.
6. **Linting**: Usa herramientas como TSLint para mantener un código limpio y consistente.

## Recursos Adicionales
- [Documentación Oficial de Angular](https://angular.io/docs)
- [Guía de Estilo de Angular](https://angular.io/guide/styleguide)
- [Tutoriales de Angular](https://angular.io/start)

---

