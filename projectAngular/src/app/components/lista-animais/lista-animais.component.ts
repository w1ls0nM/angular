import { Component, inject, SimpleChange } from '@angular/core';
import { AnimaisService } from '../../services/animais.service';
import {  ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lista-animais',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './lista-animais.component.html',
  styleUrl: './lista-animais.component.scss'
})
export class ListaAnimaisComponent {
  @ViewChild('carousel') carousel!: ElementRef;

  animais:Array<any> = [];

  animaisService = inject (AnimaisService);

  scrollLeft(): void {
    this.carousel.nativeElement.scrollBy({
      left: -200,  
      behavior: 'smooth'
    });
  }

  scrollRight(): void {
    this.carousel.nativeElement.scrollBy({
      left: 200, 
      behavior: 'smooth'
    });
  }
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
    // this.animais = this.animaisService.getAnimais();

    this.animaisService.getAnimais().subscribe(
      {
        next:(data)=>{
          console.log('data:', data);
          this.animais = data;
        },
        error:(error) => {
          console.error('erro no pedido:' , error);
        }
      }
    );
  }
}
