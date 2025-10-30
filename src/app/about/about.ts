import { Component } from '@angular/core';
import { PerfilService } from '../services/perfil';
import { EmojiPipe } from '../pipes/emoji-pipe';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [EmojiPipe, NgFor],
  templateUrl: './about.html',
  styleUrls: ['./about.css']
})
export class About {
  perfil: any;

  constructor(private perfilService: PerfilService) {
    this.perfil = this.perfilService.getPerfil();
  }
}
