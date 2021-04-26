const longestWord = (word) => {
  let phrase = word.split(' ');
  let contagem = phrase[0]
  for (let i = 1; i < phrase.length; i++) {
    if (phrase[i].length > contagem.length)
    contagem = phrase[i]
  }
  return contagem
}

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"))  // retorna 'aconteceu'