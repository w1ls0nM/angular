import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HelloWordComponent } from './hello-word/hello-word.component';
import { ContadorComponent } from './contador/contador.component';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
     HelloWordComponent,
      ContadorComponent,
       RouterLink,
       RouterLinkActive, 
       CommonModule
      ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  // str: string ='';
  // num: number = 0;
  // boll: boolean = true;
  // // todos o types que não sejam predifinidos são objetos
  // obj: object = {};
  // arr: object = [];
  // und: undefined;
  // nulo: null = null;

  // str2: string | null = null;
  // num2: number | undefined;
  // varr: 'ola' | 'mundo' = 'ola';

  // title = 'projectAngular';
  // nomeDinamico = 'Celo';

  title: string = 'projectAngular';
  nomeDinamico: string = 'Celo';
  contadorPai: number = 0;

  // valor:dataType
  quandoFoiAlterado(valor:number){
    this.contadorPai = valor;
  }
}
