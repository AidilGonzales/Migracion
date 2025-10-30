import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {
  private perfil = {
    nombre: 'Aidil Gonzales',
    carrera: 'Estudiante de ngeniería de Sistemas',
    descripcion: 'Soy estudiante apasionada por la tecnología y el diseño.',
    habilidades: ['Leer', 'Bailar', 'Ajedrez', 'Natacion', 'Enseñar'],
    proyectos: [
      { nombre: 'Migración a Angular', descripcion: 'Proyecto universitario de migración de sitio estático.' },
      { nombre: 'Pagina Personal', descripcion: 'Proyecto que hicimos con Github para la universidad' }
    ]
  };

  getPerfil() {
    return this.perfil;
  }
}
