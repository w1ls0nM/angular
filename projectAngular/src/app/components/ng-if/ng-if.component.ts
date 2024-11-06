import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-if.component.html',
  styleUrl: './ng-if.component.scss'
})
export class NgIFComponent {
num: number= -1;


fun(){
  // if(this.num>=0)
    // console.log(' > 0')
  // else if()
    // console.log(' > 0')
  // else
  // console.log(' > 0')
}
}
