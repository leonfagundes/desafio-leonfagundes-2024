export class Validator {
  recintoViavel(recinto, animal) {
    if (!animal.biomasCompatíveis().some((bioma) => recinto.bioma.includes(bioma))) {
      return false;
    }

    if (animal.carnivoro()) {
      const outrasEspecies = Object.keys(recinto.animais).filter((especie) => especie !== animal.tipo.toLowerCase());
      if (outrasEspecies.length > 0) return false;
    }

    let espacoNecessario = animal.tamanho() * animal.quantidade;
    const espacoRestante = recinto.espacoRestante();

    // Regra 6: Considerar 1 espaço extra quando há mais de uma espécie no recinto
    if (Object.keys(recinto.animais).length > 0 && !recinto.animais[animal.tipo.toLowerCase()]) {
      espacoNecessario += 1;
    }

    return espacoRestante >= espacoNecessario;
  }
}
