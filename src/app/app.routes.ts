import { Routes } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { CloudComponent } from './paginas/cloud/cloud.component';
import { HostingComponent } from './paginas/hosting/hosting.component';
import { DomainComponent } from './paginas/domain/domain.component';
import { FaqComponentComponent } from './paginas/faq-component/faq-component.component';
import { TermsComponent } from './terms/terms.component';
import { PoliticasComponent } from './politicas/politicas.component';
import { RedeComponent } from './paginas/rede/rede.component';

export const routes: Routes = [
    {path:'', component:InicioComponent},
    {path:'cloud', component:CloudComponent},
    {path:'hosting', component: HostingComponent},
    {path:'domain', component: DomainComponent},
    {path:'faq', component: FaqComponentComponent},
    {path:'termos-condicoes', component:TermsComponent},
    {path: 'politicas', component:PoliticasComponent},
    {path:'noadsvpn', component:RedeComponent}
];
