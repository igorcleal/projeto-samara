import { Upload } from './../model/upload';
import { AngularFireDatabase } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';
import { UploadService } from '../services/upload-service/upload-service.service';

@Component({
  selector: 'app-cadastro-portfolio',
  templateUrl: './cadastro-portfolio.component.html',
  styleUrls: ['./cadastro-portfolio.component.css']
})
export class CadastroPortfolioComponent implements OnInit {

  selectedFiles: FileList | null;
  currentUpload: Upload;

  constructor(private angularFire: AngularFireDatabase, private upSvc: UploadService) { }

  ngOnInit() {
  }

  formSubmit(f) {
    if (!f.valid) {
      return;
    }
    this.angularFire.list('portfolio').push(
      {
        descricao: f.controls.descricao.value,
        cliente: f.controls.cliente.value
      }
    ).then((t: any) => {
      console.log('dados gravados: ' + t.key);
    }, ((e: any) => {
      console.log('error');
    }));
    f.controls.descricao.setValue('');
    f.controls.cliente.setValue('');
  }

  detectFiles($event: Event) {
      this.selectedFiles = ($event.target as HTMLInputElement).files;
  }

  uploadSingle() {
    const file = this.selectedFiles;
    if (file && file.length === 1) {
      this.currentUpload = new Upload(file.item(0));
      this.upSvc.pushUpload(this.currentUpload);
    } else {
      console.error('No file found!');
    }
  }

  uploadMulti() {
    const files = this.selectedFiles;
    if (!files || files.length === 0) {
      console.error('No Multi Files found!');
      return;
    }

    Array.from(files).forEach((file) => {
      this.currentUpload = new Upload(file);
      this.upSvc.pushUpload(this.currentUpload);
    });
  }

}
