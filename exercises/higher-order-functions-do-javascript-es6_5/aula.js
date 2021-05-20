// const numbers = [1, 2, 3];
// numbers.push(4);

// console.log(numbers); // [1, 2, 3, 4];

// const numbers = [1, 2, 3];

// const newArray = [4, 5, 6, ...numbers];
// console.log(newArray); // [ 1, 2, 3, 4, 5, 6 ];
// console.log(numbers); // [ 1, 2, 3 ];

// const spring = ['OUT', 'NOV', 'DEZ'];
// const summer = ['JAN', 'FEV', 'MAR'];
// const fall = ['ABR', 'MAI', 'JUN'];
// const winter = ['JUL', 'AGO', 'SET'];

// const months = [...summer, ...fall, ...winter, ...spring];
// console.log(months); /* [
//   'JAN', 'FEV', 'MAR',
//   'ABR', 'MAI', 'JUN',
//   'JUL', 'AGO', 'SET',
//   'OUT', 'NOV', 'DEZ'
// ] */

// const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);
// const patientInfo = [60, 1.7];

// console.log(imc(...patientInfo)); // 20.76

// const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];

// console.log(Math.max(...randomNumbers)); // 800
// console.log(Math.min(...randomNumbers)); // 5

// const people = {
//   id: 101,
//   name: 'Alysson',
//   age: 25,
// };

// const about = {
//   address: 'Av. Getúlio Vargas, 1000',
//   occupation: 'Developer',
// };

// const customer = { ...people, ...about };
// console.log(customer); /* {
//   id: 101,
//   name: 'Alysson',
//   age: 25,
//   address: 'Av. Getúlio Vargas, 1000',
//   occupation: 'Developer'
// } */

// Faça uma lista com as suas frutas favoritas
// // EXERCÍCIO AULA
// const specialFruit = ['banana', 'laranja', 'maracujá'];

// // Faça uma lista de complementos que você gostaria de adicionar
// const additionalItens = ['cupuaçu', 'uva', 'mangá'];

// const fruitSalad = (fruit, additional) => {
//   return [...fruit, ...additional]
// };

// console.log(fruitSalad(specialFruit, additionalItens));

// function quantosParams(...args) {
//   console.log('parâmetros:', args);
//   return `Você passou ${args.length} parâmetros para a função.`;
// }

// console.log(quantosParams(0, 1, 2)); // Você passou 3 parâmetros para a função.
// console.log(quantosParams('string', null, [1, 2, 3], { })); // Você passou 4 parâmetros para a função.

// const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);
// console.log(sum(4, 7, 8, 9, 60)); // 88

// const product = {
//   name: 'Smart TV Crystal UHD',
//   price: '1899.05',
//   seller: 'Casas de Minas',
// };

// // const { name } = product;
// // console.log(name); // Smart TV Crystal UHD

// const { name, seller } = product;
// console.log(name); // Smart TV Crystal UHD
// console.log(seller); // Casas de Minas

// const student = {
//   a: 'Maria',
//   b: 'Turma B',
//   c: 'Matematica',
// };

// const { a: name, b: classAssigned, c: subject } = student;

// console.log(name); // Maria
// console.log(classAssigned); // Turma B
// console.log(subject); // Matemática

// const product = {
//   name: 'Smart TV Crystal UHD',
//   price: '1899.05',
//   seller: 'Casas de Minas',
// };

// const printProductDetails = ({ name, price, seller }) => {
//   console.log(`Promoção! ${name} por apenas ${price} é só aqui: ${seller}`);
// };

// printProductDetails(product); // Promoção! Smart TV Crystal UHD por apenas 1899.05 é só aqui: Casas de Minas

// const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];

// const firstCountry = arrayCountries[0];
// const secondCountry = arrayCountries[1];
// const thirdCountry = arrayCountries[2];
// const fourthCountry = arrayCountries[3];

// console.log(firstCountry); // Brazil
// console.log(secondCountry); // Japan
// console.log(thirdCountry); // China
// console.log(fourthCountry); // Canada

// const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];
// const [firstCountry, secondCountry, thirdCountry, fourthCountry] = arrayCountries;

// console.log(firstCountry); // Brazil
// console.log(secondCountry); // Japan
// console.log(thirdCountry); // China
// console.log(fourthCountry); // Canada
// const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

// saudacoes[1](saudacoes[0]); // Olá

// const [a, b, c] = saudacoes

// console.log(a, b)

// Produza o mesmo resultado acima, porém utilizando array destructuring

// let comida = 'gato';
// let animal = 'água';
// let bebida = 'arroz';

// let varios = ['gato', 'água', 'arroz']
// let [animal, bebida, comida] = varios

// // Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

// console.log(comida, animal, bebida); // arroz gato água

// let numerosPares = [1, 3, 5, 6, 8, 10, 12];

// // Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo

// let pares [primeiro, segundo]

// console.log(numerosPares); // [6, 8, 10, 12]

// const person = {
//   name: 'João',
//   lastName: 'Jr',
//   age: 34,
// };

// const { nationality } = person;

// console.log(nationality)

// const person = {
//   name: 'João',
//   lastName: 'Jr',
//   age: 34,
// };

// const { nationality = 'Brazilian' } = person;
// console.log(nationality); // Brazilian

// const position2d = [1.0, 2.0];
// const [x, y, z = 0] = position2d;

// console.log(x); // 1
// console.log(y); // 2
// console.log(z); // 0
// console.log(position2d); //

// Que tal praticarmos default destructuring com um exercício de fixação? Do jeito que está, quando passamos person para a função nationality o retorno é João is undefined . Ajuste a função nationality para que a chamada nationality(person) retorne João is Brazilian .

// const getNationality = ({ firstName, nationality = 'is Brazilian'}) => `${firstName} is ${nationality}`;

// const person = {
//     firstName: 'João',
//     lastName: 'Jr II',
// };

// const otherPerson = {
//     firstName: 'Ivan',
//     lastName: 'Ivanovich',
//     nationality: 'Russian',
// };

// console.log(getNationality(otherPerson)); // Ivan is Russian
// console.log(getNationality(person));

// const newUser = (id, name, email) => {
//   return {
//     id,
//     name,
//     email,
//   };
// };

// console.log(newUser(54, 'isabella', 'isabella@email.com')); // { id: 54, name: 'isabella', email: 'isabella@email.com' }

// const getPosition = (latitude, longitude) => ({
//   latitude,
//   longitude});

// console.log(getPosition(-19.8157, -43.9542));

// const greeting = (user) => console.log(`Welcome ${user}!`);

// greeting(); // Welcome undefined!

// const greeting = (user) => {
//   const userDisplay = typeof user === 'undefined' ? 'usuário' : user;
//   console.log(`Welcome ${userDisplay}!`);
// };

// greeting(); // Welcome usuário!

// const greeting = (user = 'usuário') => console.log(`Welcome ${user}!`);

// greeting(); // // Welcome usuário!

const multiply = (number, value = 1) => {
  // Escreva aqui a sua função
  return number * value
};

console.log(multiply(8));