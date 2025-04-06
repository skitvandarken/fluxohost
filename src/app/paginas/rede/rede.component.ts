import { Component } from '@angular/core';
import { MenuComponent } from '../../layout/menu/menu.component';
import { RodapeComponent } from '../../layout/rodape/rodape.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-rede',
  imports: [MenuComponent, RodapeComponent, RouterLink],
  templateUrl: './rede.component.html',
  styleUrl: './rede.component.css'
})
export class RedeComponent {

}
