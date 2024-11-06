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
  imagem = this.getRandomImg();

  num =10;

  corTexto = '#369';

  mostrarMensagem(){
    this.corTexto = this.getRandomColor();
    this.imagem = this.getRandomImg();
    this.meuNome = this.getRandomName();
  }
  private getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  private getRandomImg(): string {
    var img = `https://picsum.photos/200/300?random=${Math.random()}`;
    return img;
  }

  private getRandomName(): string {
    const names = ["Alice", "Bob", "Carol", "David", "Eve", "Frank", "Grace", "Heidi", "Ivan", "Judy"];
    const randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
}

}
