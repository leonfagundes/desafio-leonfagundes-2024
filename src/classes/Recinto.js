import { Animal } from './Animal.js';

export class Recinto {
  constructor(numero, bioma, tamanho, animais = {}) {
    this.numero = numero;
    this.bioma = bioma;
    this.tamanho = tamanho;
    this.animais = animais; // Exemplo: { leao: 1, macaco: 2 }
  }

  espacoOcupado() {
    let ocupado = 0;
    for (const [especie, quantidade] of Object.entries(this.animais)) {
      ocupado += Animal.getTamanhoPorEspecie(especie) * quantidade; // Uso correto de Animal
    }
    return ocupado;
  }

  espacoRestante() {
    return this.tamanho - this.espacoOcupado();
  }
}
