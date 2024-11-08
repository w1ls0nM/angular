import { Component } from '@angular/core';
import { ListaAnimaisComponent } from "../../components/lista-animais/lista-animais.component";

@Component({
  selector: 'app-animal',
  standalone: true,
  imports: [ListaAnimaisComponent],
  templateUrl: './animal.component.html',
  styleUrl: './animal.component.scss'
})
export class AnimalComponent {
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
    
  ]
}
