import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CidadeService } from './services/cidade.service';
import { ListarCidadeComponent } from './listar-cidade/listar-cidade.component';
import { EditarCidadeComponent } from './editar-cidade/editar-cidade.component';
import { InserirCidadeComponent } from './inserir-cidade/inserir-cidade.component';



@NgModule({
  declarations: [
    ListarCidadeComponent,
    EditarCidadeComponent,
    InserirCidadeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    CidadeService
  ]
})
export class CidadeModule { }
