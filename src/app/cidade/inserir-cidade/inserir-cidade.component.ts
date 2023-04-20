import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cidade, Estado } from 'src/app/shared';
import { CidadeService } from '../services/cidade.service';
import { Router } from '@angular/router';
import { EstadoService } from 'src/app/estado/service/estado.service';

@Component({
  selector: 'app-inserir-cidade',
  templateUrl: './inserir-cidade.component.html',
  styleUrls: ['./inserir-cidade.component.css']
})
export class InserirCidadeComponent implements OnInit {

  @ViewChild('formCidade') formCidade! : NgForm;
  cidade!: Cidade;
  estados: Estado[] = [];

  constructor(
      private cidadeService: CidadeService,
      private estadoService: EstadoService,
      private router: Router
  ) { }

  ngOnInit(): void {
    this.cidade = new Cidade();
    this.estados = this.estadoService.listarTodos();
  }

  inserir() : void{
    if(this.formCidade.form.valid){
      this.cidadeService.inserir(this.cidade);
      this.router.navigate(["/cidades"]);
    }
  }

}
