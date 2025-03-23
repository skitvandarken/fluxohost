import { Component } from '@angular/core';
import { MenuComponent } from '../layout/menu/menu.component';
import { RodapeComponent } from '../layout/rodape/rodape.component';

@Component({
  selector: 'app-politicas',
  imports: [
    MenuComponent,
    RodapeComponent
  ],
  templateUrl: './politicas.component.html',
  styleUrl: './politicas.component.css'
})
export class PoliticasComponent {

}
