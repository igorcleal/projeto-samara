import { MaterialComponentsModule } from './../material-components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroPessoaFormComponent } from './cadastro-pessoa-form/cadastro-pessoa-form.component';
import { CadastroPessoaListaComponent } from './cadastro-pessoa-lista/cadastro-pessoa-lista.component';
import { FormsModule } from '@angular/forms';
import { CadastroPessoaComponent } from './cadastro-pessoa.component';
import { AngularFireDatabase } from 'angularfire2/database';

@NgModule({
  imports: [
    CommonModule, FormsModule, MaterialComponentsModule
  ],
  providers: [
    AngularFireDatabase
  ],
  exports: [
    CadastroPessoaFormComponent,
    CadastroPessoaListaComponent,
    CadastroPessoaComponent
  ],
  declarations: [
    CadastroPessoaFormComponent,
    CadastroPessoaListaComponent,
    CadastroPessoaComponent
  ],
})
export class CadastroPessoaModule { }
