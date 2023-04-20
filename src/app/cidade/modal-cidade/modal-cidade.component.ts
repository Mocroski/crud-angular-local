import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Cidade } from 'src/app/shared';

@Component({
  selector: 'app-modal-cidade',
  templateUrl: './modal-cidade.component.html',
  styleUrls: ['./modal-cidade.component.css']
})
export class ModalCidadeComponent{

  constructor(
      public dialogRef: MatDialogRef<ModalCidadeComponent>,
      @Inject(MAT_DIALOG_DATA) public data: Cidade
  ) { }

  fechar(): void {
    this.dialogRef.close();
  }

}
