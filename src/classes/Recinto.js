import { Animal } from './Animal.js';

export class Recinto {
  constructor(numero, bioma, tamanho, animais = {}) {
    this.numero = numero;
    this.bioma = bioma;
    this.tamanho = tamanho;
    this.animais = animais;
  }

  espacoOcupado() {
    let ocupado = 0;
    // Calcula o espaço ocupado pelos animais já presentes no recinto
    for (const [especie, quantidade] of Object.entries(this.animais)) {
      ocupado += Animal.getTamanhoPorEspecie(especie.toUpperCase()) * quantidade;
    }
    return ocupado;
  }

  espacoRestante() {
    // Subtrai o espaço ocupado do tamanho total do recinto
    return this.tamanho - this.espacoOcupado();
  }

  adicionarAnimal(animal, quantidade) {
    // Verifica se há espaço suficiente para adicionar os novos animais
    const espacoNecessario = animal.tamanho() * quantidade;
    const espacoRestante = this.espacoRestante();
    return espacoRestante >= espacoNecessario;
  }
}
