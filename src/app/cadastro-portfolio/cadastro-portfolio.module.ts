import { UploadService } from './../services/upload-service/upload-service.service';
import { CadastroPortfolioComponent } from './cadastro-portfolio.component';
import { MaterialComponentsModule } from './../material-components-module/material-components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';

@NgModule({
  imports: [
    CommonModule, FormsModule, MaterialComponentsModule
  ],
  providers: [
    AngularFireDatabase,
    UploadService
  ],
  exports: [
    CadastroPortfolioComponent
  ],
  declarations: [
    CadastroPortfolioComponent
  ],
})
export class CadastroPortfolioModule { }
