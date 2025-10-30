import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router'; // 👈 agregamos RouterModule
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { firebaseConfig } from '../firebase.config';

// 👇 Importa tus componentes standalone
import { Header } from './header/header';
import { routes } from './app.routes'; // 👈 importamos las rutas

// Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule, // 👈 necesario para usar routerLink
    Header
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  // Mensaje que el padre enviará al hijo
  mensajeParaContacto = '¡Gracias por visitar mi portafolio! Si deseas contactarme, completa el formulario.';

  // Mensaje recibido desde el hijo
  mensajeDesdeHijo = '';

  // Método que recibe el mensaje emitido por el hijo
  recibirMensaje(mensaje: string) {
    console.log('📬 Mensaje recibido del hijo:', mensaje);
    this.mensajeDesdeHijo = mensaje;
  }
}
