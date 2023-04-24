import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { NavbarComponent } from './navbar.component';

@NgModule({
    declarations: [NavbarComponent],
    exports: [NavbarComponent],
    imports: [
      CommonModule,
      MatToolbarModule,
      MatIconModule,
      MatMenuModule,
      MatButtonModule,
    ],
  })
  export class NavbarModule {}
  