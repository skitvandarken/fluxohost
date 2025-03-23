import { Component } from '@angular/core';
import { MenuComponent } from '../layout/menu/menu.component';
import { RodapeComponent } from '../layout/rodape/rodape.component';

@Component({
  selector: 'app-terms',
  imports: [

    MenuComponent,
    RodapeComponent
  ],
  templateUrl: './terms.component.html',
  styleUrl: './terms.component.css'
})
export class TermsComponent {

}
