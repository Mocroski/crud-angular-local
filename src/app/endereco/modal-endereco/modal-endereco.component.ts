import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Cidade, Endereco } from 'src/app/shared';

@Component({
  selector: 'app-modal-endereco',
  templateUrl: './modal-endereco.component.html',
  styleUrls: ['./modal-endereco.component.css']
})
export class ModalEnderecoComponent {

  constructor(
        public dialogRef: MatDialogRef<ModalEnderecoComponent>,
        @Inject(MAT_DIALOG_DATA) public data: Endereco
  ) { }

  fechar(): void {
    this.dialogRef.close();
  }

}
