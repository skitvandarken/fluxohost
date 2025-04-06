import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importe o CommonModule
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-servicos',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './servicos.component.html',
  styleUrl: './servicos.component.css'
})
export class ServicosComponent {
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
          this.resposta = 'Domínio não suportado. Use: exemplo.com, exemplo.net ...';
          this.alertClass = 'uk-alert-danger';
        }
      } else {
        this.resposta = 'Por favor, insira um domínio válido.';
        this.alertClass = 'uk-alert-danger';
      }
    }
  
    verificarDisponibilidadeNameSilo(dominio: string) {
      const backendUrl = 'https://nodejs.fluxo-host.com/verificar-dominio';
  
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
            this.resposta = `O domínio ${dominioInfo.domain} está DISPONÍVEL!`;
          } else if (data.reply.unavailable) {
            this.resposta = `O domínio ${data.reply.unavailable.domain} está INDISPONÍVEL.`;
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
