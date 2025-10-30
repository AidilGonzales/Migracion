
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import {
  NgClass,
  NgStyle,
  UpperCasePipe,
  DatePipe,
  NgFor,
  NgIf
} from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NgClass, NgStyle, UpperCasePipe, DatePipe, NgFor, NgIf, FormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class ContactComponent implements OnInit {
  // 🔹 Comunicación entre componentes
  @Input() mensajePadre: string = ''; // Recibe datos del padre
  @Output() mensajeEnviado = new EventEmitter<string>(); // Envía datos al padre

  activo = true;
  fecha = new Date();

  // --- Lista de contactos ---
  contactos: any[] = [];

  // --- Estado de carga (asincronía) ---
  cargando = false;

  // --- Two-way binding ---
  nombreUsuario = '';
  emailUsuario = '';
  mensaje = '';

  // --- Property binding ---
  colorBoton = 'lightblue';

  // ✅ Se ejecuta al iniciar el componente
  ngOnInit() {
    this.cargarContactos();
  }

  // 🔹 Simula carga asincrónica con async/await
  async cargarContactos() {
    this.cargando = true;
    this.contactos = []; // Limpia mientras carga

    // Simula que tarda 2 segundos en obtener los datos
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Cuando termina, “carga” los datos
    this.contactos = [
      { nombre: 'Correo', valor: '1008320231@unajma.edu.pe', tipo: 'gmail' },
      { nombre: 'Instagram', valor: '@aidilgxnz', tipo: 'social' },
      { nombre: 'GitHub', valor: 'github.com/AidilGonzales', tipo: 'social' }
    ];

    this.cargando = false;
  }

  onSubmit(event: Event) {
    event.preventDefault();

    if (!this.nombreUsuario || !this.emailUsuario || !this.mensaje) {
      alert('Por favor completa todos los campos.');
      return;
    }

    const mensajeFinal = `Mensaje enviado 🎉\nDe: ${this.nombreUsuario} <${this.emailUsuario}>\nMensaje: ${this.mensaje}`;
    alert(mensajeFinal);

    // 🔹 Emite mensaje al padre
    this.mensajeEnviado.emit(mensajeFinal);

    // limpiar campos
    this.nombreUsuario = '';
    this.emailUsuario = '';
    this.mensaje = '';
    this.colorBoton = 'lightblue';
  }

  onNombreInput(ev: Event) {
    const value = (ev.target as HTMLInputElement).value;
  }

  toggleActivo() {
    this.activo = !this.activo;
  }
}
