// Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.
const assert = require('assert');
const greetPeople = (people) => {
  if (people.length === 0) throw new Error('Não é um array válido');
  let greeting = 'Hello ';
  let newGreeting = [];

  for (const person in people) {
   newGreeting.push(greeting + people[person])
  }
  console.log(newGreeting)
  return newGreeting;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];
greetPeople(parameter)
assert.deepStrictEqual(greetPeople(parameter), result);
assert.throws(() => {
  greetPeople([]),
  greetPeople({})
})