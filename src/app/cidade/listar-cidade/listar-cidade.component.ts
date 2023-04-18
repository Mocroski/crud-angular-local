import { Component, OnInit } from '@angular/core';
import { Cidade } from 'src/app/shared/models/cidade.model';
import { CidadeService } from '../services/cidade.service';

@Component({
  selector: 'app-listar-cidade',
  templateUrl: './listar-cidade.component.html',
  styleUrls: ['./listar-cidade.component.css']
})
export class ListarCidadeComponent implements OnInit {

  cidades: Cidade[] = [];

  constructor(private cidadeService: CidadeService) { }

  ngOnInit(): void {
  }

  listarTodos(): Cidade[] {
    return this.cidadeService.listarTodos();
  }

  remover($event: any, cidade: Cidade): void{
    $event.preventDefault();
    if(confirm(`Deseja remover a cidade ${cidade.nome}?`)){
      this.cidadeService.remover(cidade.id!);
      this.cidades = this.listarTodos();
    }
  }
}
