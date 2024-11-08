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

}
