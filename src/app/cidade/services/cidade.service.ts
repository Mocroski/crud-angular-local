import { Injectable } from '@angular/core';
import { Cidade } from 'src/app/shared/models/cidade.model';


const LS_CHAVE: string = "cidades";

@Injectable({
  providedIn: 'root'
})
export class CidadeService {

  constructor() { }

listarTodos(): Cidade[]{
  const cidades = localStorage[LS_CHAVE];

  return cidades ? JSON.parse(cidades) : [];
}

inserir(cidade: Cidade): void{
  const cidades = this.listarTodos();

  cidade.id = new Date().getTime();

  cidades.push(cidade);

  localStorage[LS_CHAVE] = JSON.stringify(cidades);
}

buscaPorId(id: number): Cidade | undefined{
  const cidades: Cidade[] = this.listarTodos();

  return cidades.find(cidade => cidade.id === id)
};

  atualizar(cidade: Cidade): void{
    const cidades: Cidade[] = this.listarTodos();

    cidades.forEach((obj, index, objs) => {
      if(cidade.id === obj.id){
        objs[index] = cidade
      }
    });

    localStorage[LS_CHAVE] = JSON.stringify(cidades);
  }

  remover(id: number): void{
  let cidades: Cidade[] = this.listarTodos();

  cidades = cidades.filter(cidade => cidade.id !== id);

  localStorage[LS_CHAVE] = JSON.stringify(cidades);
  }
}
