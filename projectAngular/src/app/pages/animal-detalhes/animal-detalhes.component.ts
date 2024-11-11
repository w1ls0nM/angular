import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AnimaisService } from '../../services/animais.service';
import { Animal } from '../../models/animal';

@Component({
  selector: 'app-animal-detalhes',
  standalone: true,
  imports: [],
  templateUrl: './animal-detalhes.component.html',
  styleUrl: './animal-detalhes.component.scss'
})
export class AnimalDetalhesComponent {
  animal: Animal | undefined;

constructor(
  private route: ActivatedRoute,
  private animaisService: AnimaisService,
  private router:Router
){}

ngOnInit(){
  console.log(this.route.snapshot.paramMap.get('id'));

  const id = this.route.snapshot.paramMap.get('id') || '1';
  this.animaisService.getAnimal(id).subscribe({
    next:(data) => {
      console.log(data);
      this.animal = data;
    },
    error:(error) => {
      console.error('algo errado' , error);
    }
  })

  
}
goToUpdateAnimal(){
  this.router.navigate(['animais','upadte', this.animal?.id]);
}

}
