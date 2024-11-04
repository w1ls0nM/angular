import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-hello-word',
  standalone: true,
  imports: [],
  templateUrl: './hello-word.component.html',
  styleUrl: './hello-word.component.scss'
})
export class HelloWordComponent {
  @Input() meuNome = 'wilson';
  mensagem = 'batata';
  imagem = 'https://blog.pareto.io/wp-content/uploads/2023/09/ia-que-cria-imagens-header.png';

  num =10;

  corTexto = '#369';

  mostrarMensagem(){
    this.corTexto = this.getRandomColor();
    this.imagem = this.getRandomImg()
  }
  private getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  private getRandomImg():string{
    var img = 'https://picsum.photos/200/300';

    return img;
  }
  // private getRandomName():string{

  // }

}
