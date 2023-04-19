import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cidade } from 'src/app/shared/models/cidade.model';
import { CidadeService } from '../services/cidade.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-cidade',
  templateUrl: './editar-cidade.component.html',
  styleUrls: ['./editar-cidade.component.css']
})
export class EditarCidadeComponent implements OnInit {

  @ViewChild("formCidade") formCidade!: NgForm;
  cidade!: Cidade;
  estado!: Cidade;

  constructor(private cidadeService: CidadeService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit( ): void {
    
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
