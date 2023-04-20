import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Endereco, Estado } from 'src/app/shared';

@Component({
  selector: 'app-modal-estado',
  templateUrl: './modal-estado.component.html',
  styleUrls: ['./modal-estado.component.css']
})
export class ModalEstadoComponent {

  constructor(
      public dialogRef: MatDialogRef<ModalEstadoComponent>,
      @Inject(MAT_DIALOG_DATA) public data: Estado
  ) { }

  fechar(): void {
    this.dialogRef.close();
  }

}
