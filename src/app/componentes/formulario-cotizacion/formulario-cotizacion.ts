import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario-cotizacion',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formulario-cotizacion.html',
  styleUrls: ['./formulario-cotizacion.css']
})
export class FormularioCotizacionComponent implements OnInit {
  cotizacionForm: any;
  mostrarConfirmacion = false;
  mensajeConfirmacion = '';
  datosPrevios: any = null;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.cotizacionForm = this.fb.group({
      nombre: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.required],
      ciudad: [''],
      servicio: ['', Validators.required],
      descripcion: ['']
    });
  }

  preConfirmar() {
    if (this.cotizacionForm.valid) {
      this.datosPrevios = this.cotizacionForm.value;
      this.mostrarConfirmacion = true;
    }
  }

  cancelarConfirmacion() {
    this.mostrarConfirmacion = false;
    this.datosPrevios = null;
  }

  guardarCotizacion() {
    const cotizacionesGuardadas = JSON.parse(localStorage.getItem('cotizaciones') || '[]');
    cotizacionesGuardadas.push(this.datosPrevios);
    localStorage.setItem('cotizaciones', JSON.stringify(cotizacionesGuardadas));
    this.cotizacionForm.reset();
    this.mostrarConfirmacion = false;
    this.datosPrevios = null;
    this.mensajeConfirmacion = '¡Cotización enviada con éxito!';
  }
}
