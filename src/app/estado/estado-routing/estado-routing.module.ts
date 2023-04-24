import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListarEstadoComponent } from '../listar-estado/listar-estado.component';
import { EditarEstadoComponent } from '../editar-estado/editar-estado.component';
import { InserirEstadoComponent } from '../inserir-estado/inserir-estado.component';

const routes: Routes = [
  {
    path: 'estados',
    redirectTo: 'estados/listar'
  },
  {
    path: 'estados/listar',
    component: ListarEstadoComponent
  },
  
  {
    path: 'estados/editar/:id',
    component: EditarEstadoComponent
  },
  
  {
    path: 'estados/novo',
    component: InserirEstadoComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstadoRoutingModule { }
