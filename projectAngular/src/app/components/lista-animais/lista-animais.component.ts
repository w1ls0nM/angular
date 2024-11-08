import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-animais',
  standalone: true,
  imports: [],
  templateUrl: './lista-animais.component.html',
  styleUrl: './lista-animais.component.scss'
})
export class ListaAnimaisComponent {
  animais:Array<any> = [
    {
      id:1,
      nome:'LauLau',
      especie:'cão'
    },
    {
      id:2,
      nome:'LauLau2',
      especie:'coelho'
    },
    {
      id:3,
      nome:'LauLau3',
      especie:'cavalo'
    }
    
  ];

}
