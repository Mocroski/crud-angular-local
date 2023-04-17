import { Injectable } from '@angular/core';
import { Endereco } from 'src/app/shared/models/endereco.model';

const LS_CHAVE: string = "enderecos";

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  constructor() { }

  listarTodos() : Endereco[]{
    const enderecos = localStorage[LS_CHAVE];

    return enderecos ? JSON.parse(enderecos): [];
  }

  inserir(endereco : Endereco) : void{
    const enderecos = this.listarTodos();

    endereco.id = new Date().getTime();

    enderecos.push(endereco);

    localStorage[LS_CHAVE] = JSON.stringify(enderecos);
  }

  buscarPorRua(rua : string): Endereco | undefined{
    const enderecos: Endereco[] = this.listarTodos();

    return enderecos.find(endereco => endereco.rua === rua)
  };

  atualizar(endereco : Endereco) : void{
    const enderecos: Endereco[] = this.listarTodos();

    enderecos.forEach((obj, index, objs) => {
      if(endereco.id === obj.id) {
        objs[index] = endereco
      }
    });
  }
}
