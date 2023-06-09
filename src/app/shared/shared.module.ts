import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MinimoValidatorDirective, NumericoDirective } from './directives';
import { MeuPipePipe } from './pipes';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    MinimoValidatorDirective,
    NumericoDirective,
    MeuPipePipe,
  ],
  imports: [CommonModule, MatToolbarModule, MatIconModule, MatMenuModule],
  exports: [
    MinimoValidatorDirective,
    NumericoDirective,
    MeuPipePipe,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule
  ],
})
export class SharedModule {}
