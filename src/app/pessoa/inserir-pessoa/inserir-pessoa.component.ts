import { Component, OnInit, ViewChild } from '@angular/core';
import { Pessoa } from 'src/app/shared/models/pessoa.model';
import { PessoaService } from '../services/pessoa.service';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-inserir-pessoa',
  templateUrl: './inserir-pessoa.component.html',
  styleUrls: ['./inserir-pessoa.component.css']
})
export class InserirPessoaComponent implements OnInit {
@ViewChild('formPessoa') formPessoa! : NgForm;
pessoa! : Pessoa;

  constructor(
    private pessoaService: PessoaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    //cria uma instancia vazia para nao ddar erro de ref
    this.pessoa = new Pessoa();
  }

  //para inserir verifica se o formulario pe valido
  //chama o inserir do service 
  //redireciona para /pessoas
  inserir(): void{
    if(this.formPessoa.form.valid) {
      this.pessoaService.inserir(this.pessoa);
      this.router.navigate(["/pessoas"]);
    }
  }

}
