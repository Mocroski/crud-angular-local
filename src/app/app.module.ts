import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PessoaModule } from './pessoa/pessoa.module';
import { EnderecoModule } from './endereco/endereco.module';
import { ListarCidadeComponent } from './cidade/listar-cidade/listar-cidade.component';
import { CidadeModule } from './cidade/cidade.module';
import { NumericoDirective } from './shared/directives/numerico.directive';
import { MinimoValidatorDirective } from './shared/directives/minimo-validator.directive';


@NgModule({
  declarations: [
    AppComponent,
    MinimoValidatorDirective
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PessoaModule, 
    EnderecoModule,
    CidadeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
