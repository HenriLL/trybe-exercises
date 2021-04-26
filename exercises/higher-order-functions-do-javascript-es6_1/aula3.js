// Crie uma função de primeira classe que tenha o retorno console.log('Acordando!!') ;
// Crie outra função de primeira classe que tenha o retorno console.log('Bora tomar café!!') ;
// Crie mais uma função de primeira classe que tenha o retorno console.log('Partiu dormir!!') ;
const doingThings = (acao) =>{
  return console.log(acao());
}

const wakeUp = () => {
  return 'Acordando!!';
};

const caf = () => {
  return 'Bora tomar café!!';
};

const dormir = () => {
  return 'Partiu dormir!!';
};
// Ao chamar a função doingThings:
doingThings(dormir);

// // Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!

