import { RecintosZoo } from './src/recintos-zoo.js';

const recintosZoo = new RecintosZoo();

// Teste com um exemplo de macacos
console.log(recintosZoo.analisaRecintos('MACACO', 2));

// Teste com um animal inválido
console.log(recintosZoo.analisaRecintos('UNICORNIO', 1));
