// const sorteioResultado = (numberoApostado, callback) => {
//   const numeroSorteado2 = Math.floor((Math.random() * 5)+1);
//   return callback(numberoApostado, 'diogo') ;
// };

// //  let numeros = sorteio();
// // // console.log(sorteio());

// const checkNumeroSorteado = (numeroApostado, henrique) => {
//   console.log(henrique);
//   return numeroApostado === henrique;
// };
// console.log(sorteioResultado(3, checkNumeroSorteado));
// console.log(checkNumeroSorteado(3, 2));
// console.log(checkNumeroSorteado(3, numeroSorteado2));
// // console.log(check(2, sorteio));
// // console.log(check(4, sorteio));
// // console.log(check(5, sorteio));

// Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

// hof(num, check)-> gera aleatório(1-5) / retorna resultado
const geraNumero = (num, checkNumero) => {
  const numero =(Math.floor(Math.random() * 5))+1;
  console.log(numero);
  if (checkNumero(num, numero)) return 'Parabéns  você ganhou';
  return 'Tente novamente';
};

const checkNumero = (num, numAleatorio) => num === numAleatorio;
console.log(geraNumero(1, checkNumero));