import { Component, OnInit } from '@angular/core';
import { Estado } from 'src/app/shared';
import { EstadoService } from '../service/estado.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalEstadoComponent } from '../modal-estado/modal-estado.component';


@Component({
  selector: 'app-listar-estado',
  templateUrl: './listar-estado.component.html',
  styleUrls: ['./listar-estado.component.css']
})
export class ListarEstadoComponent implements OnInit {

  estados: Estado[] = [];

  constructor(private estadoService: EstadoService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.estados = this.listarTodos();
  }

  listarTodos(): Estado[]{
    return this.estadoService.listarTodos();
  }

  remover($event: any, estado: Estado) : void {
    $event.preventDefault();
    if(confirm(`Deseja remover o estado ${estado.nome}?`)){
      this.estadoService.remover(estado.id!);
      this.estados = this.listarTodos();
    }
  }

  abrirModal(estado: Estado){

    const dialogRef = this.dialog.open(ModalEstadoComponent, {
      width: '400px',
      data: estado
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('Modal fechado');
    })
  }

}
