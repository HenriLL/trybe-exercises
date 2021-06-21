const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

const addTurno = (lesson2, chave, valor) => {
  lesson2[chave] = valor;
  return lesson2;
}

console.log(addTurno(lesson2, 'turno', 'manhã'))

// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
const listar = (obj) => Object.keys(obj)

console.log(listar(lesson1))

// Crie uma função para mostrar o tamanho de um objeto
const tamanho = (obj) => Object.keys(obj).length

console.log(tamanho(lesson3))


// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const listarKeys = (obj) => Object.values(obj)
console.log(listarKeys(lesson2))

// Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:
let allLessons = {};
// Object.assign(allLessons, lesson1)
// Object.assign(allLessons, lesson2)  
// Object.assign(allLessons, lesson3)


console.log(allLessons);
/*
{
  lesson1:
   { materia: 'Matemática',
     numeroEstudantes: 20,
     professor: 'Maria Clara',
     turno: 'manhã' },
  lesson2:
   { materia: 'História',
     numeroEstudantes: 20,
     professor: 'Carlos',
     turno: 'noite' },
  lesson3:
   { materia: 'Matemática',
     numeroEstudantes: 10,
     professor: 'Maria Clara',
     turno: 'noite' }
};
*/