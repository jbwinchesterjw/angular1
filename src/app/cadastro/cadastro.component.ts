import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  vetor = [];
  formulario = new FormGroup({

    nome: new FormControl(''),
    email: new FormControl(''),
    idade: new FormControl(''),
    cidade: new FormControl('')
  });

  cadastrar() {
    this.vetor.push(this.formulario.value);
    this.formulario.reset(); 
  }

  excluir(i) {
    this.vetor.splice(i, 1);
  }

  editar() {

  }

}
