import { Routes } from '@angular/router';
import { HelloWordComponent } from './hello-word/hello-word.component';
import { ContadorComponent } from './contador/contador.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NgIFComponent } from './components/ng-if/ng-if.component';

export const routes: Routes = [
    
    {
        path:'hello-word' , component: HelloWordComponent
    },
    //com o url http://localhost:4200/contador aparece 2 contadores
    {
        path:'contador' , component: ContadorComponent
    },
    {
        path: 'Ngif', component:NgIFComponent
    },
    {
        path: '', redirectTo:'/contador' , pathMatch:'full'
    },
    {
        path: '**', component: NotFoundComponent
    }
    
];
