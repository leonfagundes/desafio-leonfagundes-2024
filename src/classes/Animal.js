export class Animal {
    constructor(tipo, quantidade) {
      this.tipo = tipo.toUpperCase();
      this.quantidade = quantidade;
      this.dadosAnimal = Animal.animaisDisponiveis()[this.tipo];
    }
  
    valido() {
      return !!this.dadosAnimal;
    }
  
    static animaisDisponiveis() {
      return {
        LEAO: { tamanho: 3, bioma: ['savana'], carnivoro: true },
        LEOPARDO: { tamanho: 2, bioma: ['savana'], carnivoro: true },
        CROCODILO: { tamanho: 3, bioma: ['rio'], carnivoro: true },
        MACACO: { tamanho: 1, bioma: ['savana', 'floresta'], carnivoro: false },
        GAZELA: { tamanho: 2, bioma: ['savana'], carnivoro: false },
        HIPOPOTAMO: { tamanho: 4, bioma: ['savana', 'rio'], carnivoro: false }
      };
    }
  
    static getTamanhoPorEspecie(tipo) {
      const dados = Animal.animaisDisponiveis()[tipo.toUpperCase()];
      return dados ? dados.tamanho : 0;
    }
  
    biomasCompatíveis() {
      return this.dadosAnimal ? this.dadosAnimal.bioma : [];
    }
  
    tamanho() {
      return this.dadosAnimal ? this.dadosAnimal.tamanho : 0;
    }
  
    carnivoro() {
      return this.dadosAnimal ? this.dadosAnimal.carnivoro : false;
    }
  }
  