import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  titulo = 'Exemplo das Diretivas ngIF e ngFor';
  times = ['Grêmio', 'Palmeiras', 'Flamengo', 'Atlético', 'Santos'];
  time = this.times[0];

  exibirNome: boolean = true;

  alternar() {
    this.exibirNome = !this.exibirNome;
  }

}
