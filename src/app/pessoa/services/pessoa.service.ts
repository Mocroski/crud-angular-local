import { Injectable } from '@angular/core';
import { Pessoa } from 'src/app/shared/models/pessoa.model';

const LS_CHAVE: string = "pessoas";

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor() { }

  listarTodos(): Pessoa[]{
    const pessoas = localStorage[LS_CHAVE];

    return pessoas ? JSON.parse(pessoas) : [];

    
  }

  inserir(pessoa : Pessoa) : void {
    const pessoas = this.listarTodos();
    //Seta o ID unico
    //Para nao precisar gerenciar sra usado o TImestamp
    //Quantidade de segundos
    pessoa.id = new Date().getTime();

    pessoas.push(pessoa);

    localStorage[LS_CHAVE] = JSON.stringify(pessoas);
  }

  buscarPorId(id: number): Pessoa | undefined{
    //Obtem a lista completa de pessoas
    const pessoas: Pessoa[] = this.listarTodos();

    //efetua a busca
    //find() retorna o primeiro elementa da lista que satisfaz a condição
    //else undefined
    return pessoas.find(pessoa => pessoa.id === id)
  };

  atualizar(pessoa: Pessoa) : void{
    //Obtem a lista completa de pessoas
    const pessoas: Pessoa[] = this.listarTodos();

    //varre a lista de pessoas
    //quand encontra a pessoa com o mesmo id altera a lista
    pessoas.forEach((obj, index, objs) => {
      if(pessoa.id ===obj.id) {
        objs[index] = pessoa
      }
    });

    //armazena a nova lista no local storage
    localStorage[LS_CHAVE] = JSON.stringify(pessoas);
  }

  remover(id: number): void {
    //Obtem a lista completa de pessoas
    //Feito com let para poder ser alterada
    let pessoas: Pessoa[] = this.listarTodos();

    //filter() retorna a mesma lista com os  registros que satisfaz\em a condicao, sito é
    //cujo id é diferete do passado na funcção
    pessoas = pessoas.filter(pessoa => pessoa.id !== id);

    //Atualiza a lista de pessoas
    localStorage[LS_CHAVE] = JSON.stringify(pessoas);
  }
}
