import { Component, OnInit } from '@angular/core';
import { Endereco } from 'src/app/shared/models/endereco.model';
import { EnderecoService } from '../services/endereco.service';
import { RouterLink } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ModalEnderecoComponent } from '../modal-endereco/modal-endereco.component';

@Component({
  selector: 'app-listar-endereco',
  templateUrl: './listar-endereco.component.html',
  styleUrls: ['./listar-endereco.component.css']
})
export class ListarEnderecoComponent implements OnInit {

  enderecos: Endereco[] = [];

  constructor(private enderecoService: EnderecoService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.enderecos = this.listarTodos();
  }

  listarTodos(): Endereco[] {
    return this.enderecoService.listarTodos();
  }

  remover($event: any, endereco: Endereco) : void{
    $event.preventDefault();
    if(confirm(`Deseja remover o endereço ${endereco.rua}`)){
      this.enderecoService.remover(endereco.id!);
      this.enderecos = this.listarTodos();
    }
  }

  abrirModal(endereco: Endereco){

    const dialogRef = this.dialog.open(ModalEnderecoComponent, {
      width: '400px',
      data: endereco
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('Modal fechado');
    })
  }

}
