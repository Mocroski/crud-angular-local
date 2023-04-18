import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CidadeService } from './services/cidade.service';
import { ListarCidadeComponent } from './listar-cidade/listar-cidade.component';



@NgModule({
  declarations: [
    ListarCidadeComponent
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
