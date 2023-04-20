import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditarEstadoComponent } from './editar-estado/editar-estado.component';
import { InserirEstadoComponent } from './inserir-estado/inserir-estado.component';
import { ListarEstadoComponent } from './listar-estado/listar-estado.component';
import { SharedModule } from '../shared';
import { EstadoService } from './service/estado.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ModalEstadoComponent } from './modal-estado/modal-estado.component';



@NgModule({
  declarations: [
    ListarEstadoComponent,
    EditarEstadoComponent,
    InserirEstadoComponent,
    ModalEstadoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    EstadoService
  ]
})
export class EstadoModule { }
