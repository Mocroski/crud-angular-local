import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarPessoaComponent } from './pessoa/listar-pessoa/listar-pessoa.component';
import { InserirPessoaComponent } from './pessoa/inserir-pessoa/inserir-pessoa.component';
import { EditarPessoaComponent } from './pessoa/editar-pessoa/editar-pessoa.component';
import { ListarEnderecoComponent } from './endereco/listar-endereco/listar-endereco.component';
import { InserirEnderecoComponent } from './endereco/inserir-endereco/inserir-endereco.component';
import { EditarEnderecoComponent } from './endereco/editar-endereco/editar-endereco.component';
import { ListarCidadeComponent } from './cidade/listar-cidade/listar-cidade.component';
import { EditarCidadeComponent } from './cidade/editar-cidade/editar-cidade.component';
import { InserirCidadeComponent } from './cidade/inserir-cidade/inserir-cidade.component';
import { InserirEstadoComponent } from './estado/inserir-estado/inserir-estado.component';
import { EditarEstadoComponent } from './estado/editar-estado/editar-estado.component';
import { ListarEstadoComponent } from './estado/listar-estado/listar-estado.component';

const routes: Routes = [
  { path: '',
redirectTo: 'pessoas/listar',
pathMatch: 'full'
},

{ 
  path: 'pessoas',
redirectTo: 'pessoas/listar',
},

{ 
  path: 'pessoas/listar',
component: ListarPessoaComponent
},

{ 
  path: 'pessoas/novo',
component: InserirPessoaComponent},

{
 path: 'pessoas/editar/:id',
 component: EditarPessoaComponent
},

{ path: '',
redirectTo: 'enderecos/listar',
pathMatch: 'full'
},

{ 
  path: 'enderecos',
redirectTo: 'enderecos/listar',
},

{
  path: 'enderecos/listar',
  component: ListarEnderecoComponent
},

{
  path: 'enderecos/novo',
  component: InserirEnderecoComponent
},

{
  path: 'enderecos/editar/:id',
  component: EditarEnderecoComponent
},

{ 
  path: 'cidades',
redirectTo: 'cidades/listar',
},

{
  path: 'cidades/listar',
  component: ListarCidadeComponent
},

{
  path: 'cidades/editar/:id',
  component: EditarCidadeComponent
},

{
  path: 'cidades/novo',
  component: InserirCidadeComponent
},

{ 
  path: 'estados',
redirectTo: 'estados/listar',
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
