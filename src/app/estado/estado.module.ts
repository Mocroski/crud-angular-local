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
import { EstadoRoutingModule } from './estado-routing/estado-routing.module';



@NgModule({
  declarations: [
    ListarEstadoComponent,
    EditarEstadoComponent,
    InserirEstadoComponent,
    ModalEstadoComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule,
    EstadoRoutingModule
  ],
  providers: [
    EstadoService
  ]
})
export class EstadoModule { }
