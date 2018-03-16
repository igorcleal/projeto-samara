import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Teste';
  nome = 'oi';

  constructor( private router: Router) {}

  abrirCadastro() {
    this.router.navigate(['./cadastroVaga']);
  }
}
