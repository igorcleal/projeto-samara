import { MaterialComponentsModule } from './material-components-module/material-components.module';
import { CadastroPortfolioModule } from './cadastro-portfolio/cadastro-portfolio.module';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FirebaseConfig } from './../environments/firebase.config';
import { AngularFireModule } from 'angularfire2/index';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CadastroPessoaModule } from './cadastro-pessoa/cadastro-pessoa.module';
import { AppRoutingModule } from './app.routing';
import { CadastroVagaComponent } from './pages/cadastro-vaga/cadastro-vaga.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroVagaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule,
    CadastroPessoaModule,
    CadastroPortfolioModule,
    BrowserAnimationsModule,
    MaterialComponentsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(FirebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
