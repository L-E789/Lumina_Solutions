import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-cotizacion',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulario-cotizacion.html',
  styleUrls: ['./formulario-cotizacion.css']
})
export class FormularioCotizacionComponent implements OnInit {
  cotizacionForm: any;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.cotizacionForm = this.fb.group({
      nombre: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.required],
      ciudad: [''],
      descripcion: ['']
    });
  }

  guardarCotizacion() {
    if (this.cotizacionForm.valid) {
      const nuevaCotizacion = this.cotizacionForm.value;
      const cotizacionesGuardadas = JSON.parse(localStorage.getItem('cotizaciones') || '[]');
      cotizacionesGuardadas.push(nuevaCotizacion);
      localStorage.setItem('cotizaciones', JSON.stringify(cotizacionesGuardadas));
      this.cotizacionForm.reset();
    }
  }
}
