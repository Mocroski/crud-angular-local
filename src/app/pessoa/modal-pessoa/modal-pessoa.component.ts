import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Pessoa } from 'src/app/shared';

@Component({
  selector: 'app-modal-pessoa',
  template: `
    <h2 mat-dialog-title>Pessoa</h2>
    <div mat-dialog-content>
      <p>Nome: {{ data.nome }}</p>
      <p>Idade: {{ data.idade }}</p>
      <p>Data de nascimento: {{ data.dataNascimento! | mask: 'd0/M0/0000' }}</p>
    </div>
    <div mat-dialog-actions>
      <button mat-button (click)="fechar()">Fechar</button>
    </div>
  `,
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
