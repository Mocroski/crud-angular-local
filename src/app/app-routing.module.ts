import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginRoutes } from './auth/auth-routing/auth-routing.module';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'cidades', loadChildren: () => import('./cidade/cidade.module').then(m => m.CidadeModule) },
  { path: 'enderecos', loadChildren:() => import('./endereco/endereco.module').then(m => m.EnderecoModule) },
  {path: 'estados', loadChildren:() => import('./estado/estado.module').then(m => m.EstadoModule)},
  {path: 'pessoas', loadChildren:() => import('./pessoa/pessoa.module').then(m => m.PessoaModule)},
  {path: 'login', loadChildren:() => import('./auth/auth.module').then(m => m.AuthModule)},
  ...LoginRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
