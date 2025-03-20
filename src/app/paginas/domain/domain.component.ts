import { Component } from '@angular/core';
import { RodapeComponent } from '../../layout/rodape/rodape.component';
import { MenuComponent } from '../../layout/menu/menu.component';
import { CommonModule } from '@angular/common'; // Importe o CommonModule
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-domain',
  imports: [RodapeComponent, MenuComponent, FormsModule, CommonModule],
  templateUrl: './domain.component.html',
  styleUrls: ['./domain.component.css']
})

export class DomainComponent {
    dominio: string = '';
    resposta: string = '';
    alertClass: string = '';
    isLoading: boolean = false; // Variável para controlar o estado de carregamento
  
    verificarDominio() {
      if (this.dominio) {
        const partesDominio = this.dominio.split('.');
        const tld = partesDominio.length > 1 ? partesDominio.pop() : '';
  
        if (tld && ['com', 'net', 'org', 'online'].includes(tld)) {
          this.isLoading = true; // Ativa o estado de carregamento
          this.verificarDisponibilidadeNameSilo(this.dominio);
        } else {
          this.resposta = 'Domínio não suportado. Use .com, .net, .org ou .online.';
          this.alertClass = 'uk-alert-danger';
        }
      } else {
        this.resposta = 'Por favor, insira um domínio válido.';
        this.alertClass = 'uk-alert-danger';
      }
    }
  
    verificarDisponibilidadeNameSilo(dominio: string) {
      const backendUrl = 'http://localhost:3000/verificar-dominio';
  
      fetch(backendUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ dominio }),
      })
      .then(response => response.json())
      .then(data => {
        this.isLoading = false; // Desativa o estado de carregamento
        if (data.reply.code === 300) {
          if (data.reply.available) {
            const dominioInfo = data.reply.available.domain;
            this.resposta = `O domínio ${dominioInfo.domain} está disponível!`;
          } else if (data.reply.unavailable) {
            this.resposta = `O domínio ${data.reply.unavailable.domain} não está disponível.`;
          }
        } else {
          this.resposta = `Erro na API: ${data.reply.detail}`;
          this.alertClass = 'uk-alert-danger';
        }
      })
      .catch(error => {
        this.isLoading = false; // Desativa o estado de carregamento em caso de erro
        console.error('Erro ao verificar o domínio:', error);
        this.resposta = 'Ocorreu um erro ao verificar o domínio. Tente novamente mais tarde.';
        this.alertClass = 'uk-alert-danger';
      });
    }
  }
