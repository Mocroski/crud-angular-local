import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Pessoa } from 'src/app/shared';

@Component({
  selector: 'app-modal-pessoa',
  templateUrl: './modal-pessoa.component.html',
})
export class ModalPessoaComponent {
  constructor(
    public dialogRef: MatDialogRef<ModalPessoaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Pessoa
  ) {}

  fechar(): void {
    this.dialogRef.close();
  }
}
