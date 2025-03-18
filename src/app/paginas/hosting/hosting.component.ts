import { Component } from '@angular/core';
import { MenuComponent } from '../../layout/menu/menu.component';
import { PrecosComponent } from '../../layout/precos/precos.component';
import { RodapeComponent } from '../../layout/rodape/rodape.component';

@Component({
  selector: 'app-hosting',
  imports: [
    MenuComponent,
    PrecosComponent,
    RodapeComponent
  ],
  templateUrl: './hosting.component.html',
  styleUrl: './hosting.component.css'
})
export class HostingComponent {

}
