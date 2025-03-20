import { Component } from '@angular/core';
import { RodapeComponent } from '../../layout/rodape/rodape.component';
import { MenuComponent } from '../../layout/menu/menu.component';

@Component({
  selector: 'app-faq-component',
  imports: [RodapeComponent, MenuComponent],
  templateUrl: './faq-component.component.html',
  styleUrl: './faq-component.component.css'
})
export class FaqComponentComponent {

}
