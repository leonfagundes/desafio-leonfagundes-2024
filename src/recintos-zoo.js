import { Zoologico } from './classes/Zoologico.js';

class RecintosZoo {
  analisaRecintos(tipoAnimal, quantidade) {
    const zoologico = new Zoologico();
    return zoologico.encontrarRecintosViaveis(tipoAnimal, quantidade);
  }
}

export { RecintosZoo as RecintosZoo };
