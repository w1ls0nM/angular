import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloWordComponent } from './hello-word/hello-word.component';
import { ContadorComponent } from './contador/contador.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HelloWordComponent, ContadorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'projectAngular';
  nomeDinamico = 'Celo';
}
