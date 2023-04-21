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
import { MeuPipePipe } from './shared/pipes/meu-pipe.pipe';
import { SharedModule } from './shared';
import { ListarEstadoComponent } from './estado/listar-estado/listar-estado.component';
import { EditarEstadoComponent } from './estado/editar-estado/editar-estado.component';
import { InserirEstadoComponent } from './estado/inserir-estado/inserir-estado.component';
import { EstadoModule } from './estado/estado.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PessoaModule, 
    EnderecoModule,
    CidadeModule,
    EstadoModule,
    SharedModule,
    BrowserAnimationsModule,
    NgSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
