// const customer1 = {
//   firstName: 'Roberto',
//   age: 22,
//   job: 'Teacher',
// };

// console.log(customer1);

// customer1.lastName = 'Faria';
// console.log(customer1);

// const customer2 = {
//   firstName: 'Maria',
//   age: 23,
//   job: 'Medic',
// };

// console.log(customer2);
// customer2['lastName'] = 'Silva';
// console.log(customer2);

// const customer = {
//   firstName: 'Roberto',
//   age: 22,
//   job: 'Teacher',
// };

// let newKey = 'lastName';
// const lastName = 'Ferreira';
// customer[newKey] = lastName;
// newKey = 'fullName';
// const fullName = `${customer.firstName} ${customer.lastName}`;
// customer[newKey] = fullName;
// console.log(customer);

// ---------------------------------------------------------------

// Object Keys

// const student1 = {
//   Html: 'Muito Bom',
//   Css: 'Bom',
//   JavaScript: 'Ótimo',
//   SoftSkills: 'Ótimo',
// };

// const student2 = {
//   Html: 'Bom',
//   Css: 'Ótimo',
//   JavaScript: 'Ruim',
//   SoftSkills: 'Ótimo',
//   Git: 'Bom', // chave adicionada
// };
// const exibir = ()  =>{
// // "Nome da habilidade, Nível: valor da chave referente à habilidade"
// console.log('Estudante 1');
// for (let valor in student1){
// console.log(`${valor} Nível: ${student1[valor]} `);
// }
// console.log('\nEstudante 2');
// for (let valor in student2){
// console.log(`${valor} Nível: ${student2[valor]} `);
// }
// }
// exibir();
// //------------------------ Object.values
// console.log(Object.values(student1));
//--------------------------------------------Object.entries

// const países = {
//   França: 'Paris',
//   Brasil: 'Brasília',
//   Espanha: 'Madrid',
//   Portugal: 'Lisboa',
// };
// const pairKeyValue = Object.entries(países);
// // console.log(pairKeyValue);
// // console.log(Object.entries(países)[0]);
// // for (const valor in países) {
// //   console.log(Object.entries(países));
// // }
// for(index in pairKeyValue) {
//   console.log('--------');
//   console.log('Pais:', pairKeyValue[index][0]);
//   console.log('Capital:', pairKeyValue[index][1]);
// };

//----------------------------------------------------------------Object.assign

const person = {
  name: 'Alberto',
  lastName: 'Gomes',
  age: 20,
};

const info = {
  age: 23,
  job: 'engenheiro',
};

const family = {
  children: ['Maria', 'João'],
  wife: 'Ana',
};

Object.assign(person, info, family)
console.log(person)

for (let valor in person) {
  console.log(valor);
}