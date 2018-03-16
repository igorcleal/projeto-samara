import { AngularFireDatabase } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-vaga',
  templateUrl: './cadastro-vaga.component.html',
  styleUrls: ['./cadastro-vaga.component.css']
})
export class CadastroVagaComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  listEstados;
  estadoSelecionado = null;

  constructor(private _formBuilder: FormBuilder,
    private angularFire: AngularFireDatabase) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      empresa: ['', Validators.required],
      estado: ['', Validators.required],
      cidade: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      endereco: ['', Validators.required]
    });

    this.listEstados = this.angularFire.list('estados', ref => ref.orderByChild('nome')).valueChanges();

  }

  formSubmit(f) {
    if (!f.valid) {
      return;
    }
    this.angularFire.list('vagas').push(
      {
        cargo: f.controls.cargo.value
      }
    ).then((t: any) => {
      console.log('dados gravados: ' + t.key);
    }, ((e: any) => {
      console.log(e);
      console.log('error');
    }));
    f.controls.cargo.setValue('');
  }

}
