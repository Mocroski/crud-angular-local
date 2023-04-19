import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Estado } from 'src/app/shared';
import { EstadoService } from '../service/estado.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inserir-estado',
  templateUrl: './inserir-estado.component.html',
  styleUrls: ['./inserir-estado.component.css']
})
export class InserirEstadoComponent implements OnInit {

  @ViewChild('formEstado') formEstado!: NgForm;
  estado!: Estado;

  constructor(
      private estadoService: EstadoService,
      private router: Router
  ) { }

  ngOnInit(): void {
    this.estado = new Estado();
  }

  inserir():  void{
    if(this.formEstado.form.valid){
      this.estadoService.inserir(this.estado);
      this.router.navigate(["/estados"]);
    }
  }

}
