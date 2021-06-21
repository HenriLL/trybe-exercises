// Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.
const assert = require('assert');
const removeVowels = (word) => {
  const characters = word.split('');
  const results = [];
  let cont = 1;
  if (typeof(word) !== 'string') {
    throw new Error('Não é string')
  }
  for (let index = 0; index < characters.length; index += 1) {
    if (
      characters[index] === 'a' ||
      characters[index] === 'o' ||
      characters[index] === 'i' ||
      characters[index] === 'e' ||
      characters[index] === 'u'
    ) {
      results.push(cont);
      cont += 1
    } else {
      results.push(characters[index]);
    }
  }
  return results.join('');
};


const parameter = 'Dayane';
const result = 'D1y2n3';
console.log(removeVowels(parameter))

assert.deepStrictEqual(removeVowels(parameter), result);
assert.notDeepStrictEqual(removeVowels(parameter), parameter)
assert.throws(() => {
  removeVowels(''),
  removeVowels([])
})