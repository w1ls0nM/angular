import { Component, inject } from '@angular/core';
import { AnimaisService } from '../../services/animais.service';

@Component({
  selector: 'app-lista-animais',
  standalone: true,
  imports: [],
  templateUrl: './lista-animais.component.html',
  styleUrl: './lista-animais.component.scss'
})
export class ListaAnimaisComponent {
  animais:Array<any> = [];

  animaisService = inject (AnimaisService)
}
