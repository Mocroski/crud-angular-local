import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListarEstadoComponent } from '../listar-estado/listar-estado.component';
import { EditarEstadoComponent } from '../editar-estado/editar-estado.component';
import { InserirEstadoComponent } from '../inserir-estado/inserir-estado.component';

const routes: Routes = [
  { path: '', component: ListarEstadoComponent },
  { path: 'novo', component: InserirEstadoComponent },
  { path: 'editar/:id', component: EditarEstadoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstadoRoutingModule { }
