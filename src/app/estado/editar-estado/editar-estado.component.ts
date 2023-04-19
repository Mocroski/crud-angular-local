import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Estado } from 'src/app/shared';
import { EstadoService } from '../service/estado.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-estado',
  templateUrl: './editar-estado.component.html',
  styleUrls: ['./editar-estado.component.css']
})
export class EditarEstadoComponent implements OnInit {

  @ViewChild("formEstado") formEstado!: NgForm;
  estado!: Estado;

  constructor(private estadoService: EstadoService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    
    let id = +this.route.snapshot.params['id'];
    
    const res = this.estadoService.buscaPorId(id);
    if(res !== undefined)
    this.estado = res;
      else{
        throw new Error("Estado nao encontrado: id = " + id)
      }
    } 
    

      atualizar(): void{
        if(this.formEstado.form.valid){
          this.estadoService.atualizar(this.estado);
          this.router.navigate(['/estados']);
        }
      }
}
