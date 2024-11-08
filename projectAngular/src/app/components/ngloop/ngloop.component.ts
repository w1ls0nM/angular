import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ngloop',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ngloop.component.html',
  styleUrl: './ngloop.component.scss'
})
export class NgloopComponent {
  arr:Array<number> = [1,2,3,4,5,6]

  frutas:Array<string> =[
    'maça',
    'manga',
    'Morango'
  ]
 
}
