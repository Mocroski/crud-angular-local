import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CidadeService } from './services/cidade.service';
import { ListarCidadeComponent } from './listar-cidade/listar-cidade.component';
import { EditarCidadeComponent } from './editar-cidade/editar-cidade.component';
import { InserirCidadeComponent } from './inserir-cidade/inserir-cidade.component';
import { ModalCidadeComponent } from './modal-cidade/modal-cidade.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { NgSelectModule } from '@ng-select/ng-select';
import { CidadeRoutingModule } from './cidade-routing/cidade-routing.module';



@NgModule({
  declarations: [
    ListarCidadeComponent,
    EditarCidadeComponent,
    InserirCidadeComponent,
    ModalCidadeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    NgSelectModule,
    CidadeRoutingModule

  ],
  providers: [
    CidadeService
  ]
})
export class CidadeModule { }
