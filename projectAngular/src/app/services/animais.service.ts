import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimaisService {
  private animais:Array<any> = [
    {
      id:1,
      nome:'LauLau',
      especie:'cão'
    },
    {
      id:2,
      nome:'LauLau2',
      especie:'coelho'
    },
    {
      id:3,
      nome:'LauLau3',
      especie:'cavalo'
    }
    
  ];
  constructor() {
    console.log('AnimaisService.constructor()')
   }

   getAnimais():Array<any>{

    
    return this.animais;
   }
}
