import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { ListarEnderecoComponent } from '../listar-endereco/listar-endereco.component';
import { InserirEnderecoComponent } from '../inserir-endereco/inserir-endereco.component';
import { EditarEnderecoComponent } from '../editar-endereco/editar-endereco.component';

const routes: Routes = [
  { path: '', component: ListarEnderecoComponent },
  { path: 'novo', component: InserirEnderecoComponent },
  { path: 'editar/:id', component: EditarEnderecoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnderecoRoutingModule { }
