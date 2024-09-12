import { Recinto } from './Recinto.js';
import { Animal } from './Animal.js';
import { Validator } from './Validator.js';

export class Zoologico {
  constructor() {
    this.recintos = [
      new Recinto(1, ['savana'], 10, { macaco: 3 }),
      new Recinto(2, ['floresta'], 5, {}),
      new Recinto(3, ['savana', 'rio'], 7, { gazela: 1 }),
      new Recinto(4, ['rio'], 8, {}),
      new Recinto(5, ['savana'], 9, { leao: 1 })
    ];
  }

  encontrarRecintosViaveis(tipoAnimal, quantidade) {
    const validator = new Validator();
    const recintosViaveis = [];

    const animal = new Animal(tipoAnimal, quantidade);

    if (!animal.valido()) {
      return { erro: 'Animal inválido' };
    }

    if (!Number.isInteger(quantidade) || quantidade <= 0) {
      return { erro: 'Quantidade inválida' };
    }

    this.recintos.forEach((recinto) => {
      if (validator.recintoViavel(recinto, animal)) {
        let espacoRestanteAposAdicionar = recinto.espacoRestante() - (animal.tamanho() * quantidade);
        
        // Regra 6: Considerar 1 espaço extra quando há mais de uma espécie
        if (Object.keys(recinto.animais).length > 0 && !recinto.animais[tipoAnimal.toLowerCase()]) {
          espacoRestanteAposAdicionar -= 1;
        }

        recintosViaveis.push(
          `Recinto ${recinto.numero} (espaço livre: ${espacoRestanteAposAdicionar} total: ${recinto.tamanho})`
        );
      }
    });

    if (recintosViaveis.length === 0) {
      return { erro: 'Não há recinto viável' };
    }

    return { recintosViaveis };
  }
}
