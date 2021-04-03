const longestWord = (phrase) => {
  let contagem = phrase.split(' ');
  let maior = contagem[0];
  console.log(contagem)
  for( let index = 1; index < phrase.split(' ').length; index += 1){
    if ( maior.length < contagem.length) {
      maior = contagem[index];
    }
  }
  return maior;
}



console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu")) // retorna 'aconteceu'