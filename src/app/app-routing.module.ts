import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cidades', loadChildren: () => import('./cidade/cidade.module').then(m => m.CidadeModule) },
  { path: 'enderecos', loadChildren:() => import('./endereco/endereco.module').then(m => m.EnderecoModule) },
  {path: 'estados', loadChildren:() => import('./estado/estado.module').then(m => m.EstadoModule)},
  {path: 'pessoas', loadChildren:() => import('./pessoa/pessoa.module').then(m => m.PessoaModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
