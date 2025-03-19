import { Component } from '@angular/core';
import { RodapeComponent } from '../../layout/rodape/rodape.component';
import { MenuComponent } from '../../layout/menu/menu.component';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-domain',
  imports: [RodapeComponent, MenuComponent, FormsModule],
  templateUrl: './domain.component.html',
  styleUrl: './domain.component.css'
})
export class DomainComponent {
  dominio: string = ''; // Variável para armazenar o valor do input

  // Função para verificar o domínio
  verificarDominio() {
      if (this.dominio) {
          // Extrai o TLD (extensão do domínio, como .com, .net, etc.)
          const tld = this.dominio.split('.').pop(); // Pega a última parte após o ponto

          // Monta a URL com base no TLD
          let url;
          switch (tld) {
              case 'com':
                  url = `https://q28hpkmheelk.upmind.app/order/product?pfields%5Bsld%5D=${this.dominio}&catid=50381d78-0e72-d4d6-860c-8413569926e5&pid=35983e23-06e7-5409-756b-24981d210d76&sub_pids=293e8d56-9d07-2459-050a-54e853121607`;
                  break;
              case 'net':
                  url = `https://q28hpkmheelk.upmind.app/order/product?pfields%5Bsld%5D=${this.dominio}&catid=50381d78-0e72-d4d6-860c-8413569926e5&pid=27831d63-50d8-2495-69dc-d49e176259e0&sub_pids=293e8d56-9d07-2459-050a-54e853121607`;
                  break;
              case 'org':
                  url = `https://q28hpkmheelk.upmind.app/order/product?pfields%5Bsld%5D=${this.dominio}&catid=50381d78-0e72-d4d6-860c-8413569926e5&pid=27831d63-50d8-2495-698a-d49e176259e0&sub_pids=293e8d56-9d07-2459-050a-54e853121607`;
                  break;
              case 'online':
                  url = `https://q28hpkmheelk.upmind.app/order/product?pfields%5Bsld%5D=${this.dominio}&catid=50381d78-0e72-d4d6-860c-8413569926e5&pid=35983e23-06e7-5409-756b-24981d210d76&sub_pids=293e8d56-9d07-2459-050a-54e853121607`;
                  break;
              default:
                  alert('Domínio não suportado. Use .com, .net, .org ou .online.');
                  return;
          }

          // Redireciona para a URL
          window.location.href = url;
      } else {
          alert('Por favor, insira um domínio válido.');
      }
  }
}
