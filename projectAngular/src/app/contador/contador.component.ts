import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contador',
  standalone: true,
  imports: [],
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.scss'
})
export class ContadorComponent {
@Input() contador = 0;

incrementar (){
  this.contador++;
}

decrementar (){
  if(this.contador > 0)
  {
    this.contador--;
  }
  
}
}
