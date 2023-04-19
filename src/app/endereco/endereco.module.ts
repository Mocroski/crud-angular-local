import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EditarEnderecoComponent } from './editar-endereco/editar-endereco.component';
import { InserirEnderecoComponent } from './inserir-endereco/inserir-endereco.component';
import { ListarEnderecoComponent } from './listar-endereco/listar-endereco.component';
import { EnderecoService } from './services/endereco.service';
import { SharedModule } from '../shared';
import { IConfig, NgxMaskModule } from 'ngx-mask';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};

@NgModule({
  declarations: [
    EditarEnderecoComponent,
    InserirEnderecoComponent,
    ListarEnderecoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule, 
    SharedModule,
    NgxMaskModule.forRoot()
  ],
  providers: [
    EnderecoService
  ]
})
export class EnderecoModule { }
