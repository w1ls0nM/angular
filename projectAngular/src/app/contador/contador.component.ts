import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-contador',
  standalone: true,
  imports: [],
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.scss'
})
export class ContadorComponent {
@Input() contador = 0;
@Output() foiAlterado = new EventEmitter();

incrementar (){
  this.contador++;
  this.foiAlterado.emit(this.contador);
}

decrementar (){
  if(this.contador > 0)
  {
    this.contador--;
    
    this.foiAlterado.emit(this.contador);
  }
  
}
}
