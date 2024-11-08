import { Component, inject, SimpleChange } from '@angular/core';
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

  animaisService = inject (AnimaisService);
  //old version
  // constructor(private animaisService: AnimaisService){}

  //chamamos no inicio e depois que os imputes tiverem mudanças
  // ngOnChanges(changes: SimpleChange){
  //   //para varáveis com input
  //   // if(changes['animais']){
  //   //   changes['animais'].previousValue;
  //   //   changes['animais'].currentValue;
  //   //   changes['animais'].firstValue;


  //   // }
  // }

  ngOnInit(){
    this.animais = this.animaisService.getAnimais();
  }
}
