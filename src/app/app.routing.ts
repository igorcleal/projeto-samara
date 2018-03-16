import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { CadastroPortfolioComponent } from './cadastro-portfolio/cadastro-portfolio.component';
import { CadastroVagaComponent } from './pages/cadastro-vaga/cadastro-vaga.component';

const routes: Routes = [
    { path: 'cadastroVaga', component: CadastroVagaComponent }
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
    ],
})
export class AppRoutingModule { }