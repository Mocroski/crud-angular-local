import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MinimoValidatorDirective, NumericoDirective } from './directives';
import { MeuPipePipe } from './pipes';
import { NavbarComponent } from './components/navbar/navbar.component';



@NgModule({
  declarations: [
    MinimoValidatorDirective,
    NumericoDirective,
    MeuPipePipe,
    NavbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MinimoValidatorDirective,
    NumericoDirective,
    MeuPipePipe,
    NavbarComponent
  ]
})
export class SharedModule { }
