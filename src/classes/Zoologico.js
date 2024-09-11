import { Recinto } from './Recinto.js';
import { Animal } from './Animal.js';
import { Validator } from './Validator.js';

export class Zoologico {
  constructor() {
    this.recintos = [
      new Recinto(1, ['savana'], 10, { macacos: 3 }),
      new Recinto(2, ['floresta'], 5, {}),
      new Recinto(3, ['savana', 'rio'], 7, { gazela: 1 }),
      new Recinto(4, ['rio'], 8, {}),
      new Recinto(5, ['savana'], 9, { leao: 1 })
    ];
  }

  encontrarRecintosViaveis(tipoAnimal, quantidade) {
    const validator = new Validator();
    const recintosViaveis = [];

    // Cria uma instância do animal informado
    const animal = new Animal(tipoAnimal, quantidade);

    // Verifica se o animal é válido
    if (!animal.valido()) {
      return { erro: 'Animal inválido' };
    }

    // Verifica se a quantidade é válida
    if (!Number.isInteger(quantidade) || quantidade <= 0) {
      return { erro: 'Quantidade inválida' };
    }

    // Filtra os recintos viáveis
    this.recintos.forEach((recinto) => {
      if (validator.recintoViavel(recinto, animal)) {
        recintosViaveis.push(
          `Recinto ${recinto.numero} (espaço livre: ${recinto.espacoRestante()} total: ${recinto.tamanho})`
        );
      }
    });

    // Retorna a lista de recintos ou um erro caso nenhum seja viável
    if (recintosViaveis.length === 0) {
      return { erro: 'Não há recinto viável' };
    }

    return { recintosViaveis };
  }
}
