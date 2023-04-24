import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarPessoaComponent } from '../listar-pessoa/listar-pessoa.component';
import { InserirPessoaComponent } from '../inserir-pessoa/inserir-pessoa.component';
import { EditarPessoaComponent } from '../editar-pessoa/editar-pessoa.component';

const routes: Routes = [
  { path: '', component: ListarPessoaComponent },
  { path: 'novo', component: InserirPessoaComponent },
  { path: 'editar/:id', component: EditarPessoaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PessoaRoutingModule { }
