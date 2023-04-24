import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InserirPessoaComponent } from './inserir-pessoa/inserir-pessoa.component';
import { EditarPessoaComponent } from './editar-pessoa/editar-pessoa.component';
import { ListarPessoaComponent } from './listar-pessoa/listar-pessoa.component';
import { PessoaService } from './services/pessoa.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { SharedModule } from '../shared';
import { ModalPessoaComponent } from './modal-pessoa/modal-pessoa.component';
import { MatDialogModule } from '@angular/material/dialog';
import { PessoaRoutingModule } from './pessoa-routing/pessoa-routing.module';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};

@NgModule({
  declarations: [
    InserirPessoaComponent,
    EditarPessoaComponent,
    ListarPessoaComponent,
    ModalPessoaComponent
  ],
  imports: [
   CommonModule,
   FormsModule,
   NgxMaskModule.forRoot(),
   SharedModule,
   MatDialogModule,
   PessoaRoutingModule
  ],
  providers: [
    PessoaService
  ]
})
export class PessoaModule { }
