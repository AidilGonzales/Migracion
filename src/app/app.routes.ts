import { Routes } from '@angular/router';
import { Inicio } from './inicio/inicio';
import { About } from './about/about';
import { Skills } from './skills/skills';
import { ContactComponent } from './contact/contact';

export const routes: Routes = [
  { path: '', redirectTo: '.', pathMatch: 'full' },
  { path: 'inicio', component: Inicio },
  { path: 'sobre-mi', component: About },
  { path: 'habilidades', component: Skills },
  { path: 'contacto', component: ContactComponent },
  { path: '**', redirectTo: 'inicio', pathMatch: 'full' }
];
