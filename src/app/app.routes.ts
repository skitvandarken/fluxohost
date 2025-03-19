import { Routes } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { CloudComponent } from './paginas/cloud/cloud.component';
import { HostingComponent } from './paginas/hosting/hosting.component';
import { DomainComponent } from './paginas/domain/domain.component';

export const routes: Routes = [
    {path:'', component:InicioComponent},
    {path:'cloud', component:CloudComponent},
    {path:'hosting', component: HostingComponent},
    {path:'domain', component: DomainComponent}
];
