import { Routes } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { CloudComponent } from './paginas/cloud/cloud.component';

export const routes: Routes = [
    {path:'', component:InicioComponent},
    {path:'cloud', component:CloudComponent}
];
