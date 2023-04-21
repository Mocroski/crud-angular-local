import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cidade } from 'src/app/shared/models/cidade.model';
import { CidadeService } from '../services/cidade.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Estado } from 'src/app/shared';
import { EstadoService } from 'src/app/estado/service/estado.service';

@Component({
  selector: 'app-editar-cidade',
  templateUrl: './editar-cidade.component.html',
  styleUrls: ['./editar-cidade.component.css']
})
export class EditarCidadeComponent implements OnInit {

  @ViewChild("formCidade") formCidade!: NgForm;
  cidade!: Cidade;
  estados: Estado[] = [];

  constructor(private cidadeService: CidadeService,
              private estadoService: EstadoService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit( ): void {

    this.estados = this.estadoService.listarTodos();

    let id = +this.route.snapshot.params['id'];

    const res = this.cidadeService.buscaPorId(id);
    if(res !== undefined)
      this.cidade = res;
      else{
        throw new Error("Endereço não encontrado: id = " + id)
      }
  }

  atualizar(): void{
    if(this.formCidade.form.valid){
      this.cidadeService.atualizar(this.cidade);
      this.router.navigate(['/cidades']);
    }
  }

}
