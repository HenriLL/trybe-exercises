// const students = [
//   { name: 'Maria', grade: 70, approved: '' },
//   { name: 'José', grade: 56, approved: '' },
//   { name: 'Roberto', grade: 90, approved: '' },
//   { name: 'Ana', grade: 81, approved: '' },
// ];

// function verifyGrades() {
//   for (let i = 0; i < students.length; i += 1) {
//     const student = students[i];
//     if (student.grade >= 60) {
//       student.approved = 'Aprovado';
//     } else {
//       student.approved = 'Recuperação';
//     }
//   }
// }

// verifyGrades();

// console.log(students);
// // [
// //   { name: 'Maria', grade: 70, approved: 'Aprovado' },
// //   { name: 'José', grade: 56, approved: 'Recuperação' },
// //   { name: 'Roberto', grade: 90, approved: 'Aprovado' },
// //   { name: 'Ana', grade: 81, approved: 'Aprovado' }
// // ]

// // ForEach
// const students = [
//   { name: 'Maria', grade: 70, approved: '' },
//   { name: 'José', grade: 56, approved: '' },
//   { name: 'Roberto', grade: 90, approved: '' },
//   { name: 'Ana', grade: 81, approved: '' },
// ];

// function verifyGrades() {
//   students.forEach((student, index) => {
//     if (student.grade >= 60) {
//       students[index].approved = 'Aprovado';
//     } else {
//       students[index].approved = 'Recuperação';
//     }
//   });
// }

// verifyGrades();

// console.log(students);
// // [
// //   { name: 'Maria', grade: 70, approved: 'Aprovado' },
// //   { name: 'José', grade: 56, approved: 'Recuperação' },
// //   { name: 'Roberto', grade: 90, approved: 'Aprovado' },
// //   { name: 'Ana', grade: 81, approved: 'Aprovado' }
// // ]

// const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];
// let firstMultipleOf5;
// for (let index = 0; index < numbers.length; index += 1) {
//   if (numbers[index] % 5 === 0) {
//     firstMultipleOf5 = numbers[index];
//     break;
//   }
// }

// console.log(firstMultipleOf5);
// // 50

//Find
// const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];
// const firstMultipleOf5 = numbers.find((number) => number % 5 === 0);

// console.log(firstMultipleOf5);
// // 50

// const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];
// arrayOfValues.forEach((element) => {
//   console.log('Cada elemento do array:', element);
// });

// Cada elemento do array: josé
// Cada elemento do array: 50
// Cada elemento do array: 0.25
// Cada elemento do array: { comida: 'Chocolate' }

// const emailListInData = [
//   'roberta@email.com',
//   'paulo@email.com',
//   'anaroberta@email.com',
//   'fabiano@email.com',
// ];

// const showEmailList = (email) => {
//   console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
// };

// // Use o método forEach chamando a callback showEmailList para apresentar os emails.
// emailListInData.forEach((email) => {
//   showEmailList(email);
// });

////////////////////

// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const multipliesFor2 = (element) => {
//   console.log(`${element} * 2: ${element * 2}`);
// };

// numbers.forEach(multipliesFor2);

// const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];

// const convertToUpperCase = (name, index) => {
//   names[index] = name.toUpperCase();
// };

// names.forEach(convertToUpperCase);
// console.log(names); // [ 'BIANCA', 'CAMILA', 'FERNANDO', 'ANA ROBERTA' ]

// FIND

// const numbers = [19, 21, 30, 3, 45, 22, 15];

// const verifyEven = (number) => number % 2 === 0;

// const isEven = numbers.find(verifyEven);

// console.log(isEven); // 30

// console.log(verifyEven(9)); // False
// console.log(verifyEven(14)); // True

// // Outra forma de ser realizada sem a necessidade de criar uma nova função.
// const isEven2 = numbers.find((number) => number % 2 === 0);

// console.log(isEven2); // 30

//Some

// const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

// const verifyFirstLetter = (letter, names) => names.some((name) => name[0] === letter);

// console.log(verifyFirstLetter('J', listNames)); // true
// console.log(verifyFirstLetter('x', listNames)); // false

// Every

// const grades = {
//   portugues: 'Aprovado',
//   matematica: 'Reprovado',
//   ingles: 'Aprovado',
// };

// const verifyGrades = (studentGrades) => (
//   Object.values(studentGrades).every((grade) => grade === 'Aprovado')
// );

// console.log(verifyGrades(grades));

// Sort

const food = ['arroz', 'feijão', 'farofa', 'chocolate', 'doce de leite'];
food.sort();
console.log(food);
// [ 'arroz', 'chocolate', 'doce de leite', 'farofa', 'feijão' ]

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.sort();
console.log(numbers); // [1, 10, 2, 3, 4, 5, 6, 7, 8, 9]

const points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => a - b);
console.log(points); // [1, 5, 10, 25, 40, 100]