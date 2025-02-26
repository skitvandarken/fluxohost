import { Component } from '@angular/core';
import { MenuComponent } from '../../layout/menu/menu.component';
import { CarrosselComponent } from '../../layout/carrossel/carrossel.component';
import { ServicosComponent } from '../../layout/servicos/servicos.component';
import { ContactoComponent } from '../../layout/contacto/contacto.component';

@Component({
  selector: 'app-inicio',
  imports: [
   MenuComponent,
   CarrosselComponent,
   ServicosComponent,
   ContactoComponent,
  ],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
