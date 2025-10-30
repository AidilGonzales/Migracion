import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './skills.html',
  styleUrls: ['./skills.css']
})
export class Skills {
  mostrar = true;
  habilidades = ['Angular', 'Python', 'HTML', 'CSS', 'JavaScript'];
}
