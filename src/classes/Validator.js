export class Validator {
    recintoViavel(recinto, animal) {
      // Verifica se o bioma do recinto é compatível com o bioma do animal
      if (!animal.biomasCompatíveis().some((bioma) => recinto.bioma.includes(bioma))) {
        return false;
      }
  
      // Regra dos carnívoros: eles só podem estar com a mesma espécie
      if (animal.carnivoro()) {
        const outrasEspecies = Object.keys(recinto.animais).filter((especie) => especie !== animal.tipo.toLowerCase());
        if (outrasEspecies.length > 0) return false;
      }
  
      // Verifica se há espaço suficiente
      const espacoNecessario = animal.tamanho() * animal.quantidade;
      const espacoRestante = recinto.espacoRestante();
  
      return espacoRestante >= espacoNecessario;
    }
  }
  