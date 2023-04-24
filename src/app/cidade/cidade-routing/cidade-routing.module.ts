import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarCidadeComponent } from '../listar-cidade/listar-cidade.component';
import { EditarCidadeComponent } from '../editar-cidade/editar-cidade.component';
import { InserirCidadeComponent } from '../inserir-cidade/inserir-cidade.component';

const routes: Routes = [
  { path: '', component: ListarCidadeComponent },
  { path: 'editar/:id', component: EditarCidadeComponent },
  { path: 'novo', component: InserirCidadeComponent },
  
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class CidadeRoutingModule { }
