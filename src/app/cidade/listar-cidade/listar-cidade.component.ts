import { Component, OnInit } from '@angular/core';
import { Cidade } from 'src/app/shared/models/cidade.model';
import { CidadeService } from '../services/cidade.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalCidadeComponent } from '../modal-cidade/modal-cidade.component';

@Component({
  selector: 'app-listar-cidade',
  templateUrl: './listar-cidade.component.html',
  styleUrls: ['./listar-cidade.component.css']
})
export class ListarCidadeComponent implements OnInit {

  cidades: Cidade[] = [];

  constructor(private cidadeService: CidadeService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.cidades = this.cidadeService.listarTodos();
    
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

  abrirModal(cidade: Cidade){
    console.log(cidade);


    const dialogRef = this.dialog.open(ModalCidadeComponent, {
      width: '400px',
      data: cidade
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('Modal Fechado');
    })
  }
}
