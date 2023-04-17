import { Component, OnInit, ViewChild } from '@angular/core';
import { Pessoa } from 'src/app/shared/models/pessoa.model';
import { PessoaService } from '../services/pessoa.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-pessoa',
  templateUrl: './editar-pessoa.component.html',
  styleUrls: ['./editar-pessoa.component.css']
})
export class EditarPessoaComponent implements OnInit {

  @ViewChild("formPessoa") formPessoa!: NgForm;
  pessoa!: Pessoa;

  constructor(private pessoaService: PessoaService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    //snapshot.params de activedroute da acesso aos parametros passados
    //operador + (antes do this) converte para numero
    let id = +this.route.snapshot.params['id'];
    //com o id ibtem a pessoa
    const res = this.pessoaService.buscarPorId(id);
    if(res !== undefined)
      this.pessoa = res;
      else
      throw new Error("Pessoa não encontrada: id = " + id)
    
  }

  atualizar(): void {
    //verifica se  o formulario é valido
    if(this.formPessoa.form.valid){
      //Efetivamente atualiza a pessoa
      this.pessoaService.atualizar(this.pessoa);
      //redireciona para pessoas/listar
      this.router.navigate(['/pessoas']);
    }
  }

}
