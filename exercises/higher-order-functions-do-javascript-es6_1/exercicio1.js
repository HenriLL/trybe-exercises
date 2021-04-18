// const newEmployees = () => {
//   const employees = {
//     id1: // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro
//     id2: // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro
//     id3: // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro
//   }
//   return employees;
// };
// const obj = (nomeCompleto) => {
//   const email = nomeCompleto.split(' ').join('_').toLowerCase();
//   return { nomeCompleto, email: `${email}@trybe.com`};
// };

const newEmployees = (gerarNome, nome) => {
  const employees = {
    id1: gerarNome('Pedro Guerra'),
    id2: gerarNome('Luiza Drumond'),
    id3: gerarNome('Carla Paiva'),
    id4: gerarNome(nome),
     // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro
     // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro
  };
  return employees;
};

const gerarNome = (nome) =>{
  const email = nome.split(' ').join('_').toLowerCase();;
  return { nome: nome, email: `${email}@trybe.com`,};
};

console.log(newEmployees(gerarNome, 'Henrique Lima'));
