// test('Não deveria passar!', () => {
//   setTimeout(() => {
//     expect(10).toBe(5);
//     console.log('Deveria falhar!');
//   }, 500);
// });


// test('Não deveria passar!', (done) => {
//   setTimeout(() => {
//     expect(10).toBe(5);
//     console.log('Deveria falhar!');
//     done();
//   }, 500);
// });

// test('Não deveria passar!', (done) => {
//   setTimeout(() => {
//     try {
//       expect(10).toBe(5);
//       console.log('Deveria falhar!');
//       done();
//     } catch (error) {
//       done(error); // Alteramos esta linha
//     }
//   }, 500);
// });

// const asyncSum = (a, b, callback) => {
//   setTimeout(() => {
//     const result = a + b;
//     callback(result);
//   }, 500);
// };

// test('Testando asyncSum, soma 5 mais 10', (done) => {
//   asyncSum(5, 10, (result) => {
//     try {
//       expect(result).toBe(15);
//       done();
//     } catch (error) {
//       done(error);
//     }
//   });
// });

const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalsByType = (type) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrayAnimals = Animals.filter((animal) => animal.type === type);

      if (arrayAnimals.length !== 0) {
        return resolve(arrayAnimals);
      }

      return reject(new Error('Não possui esse tipo de animal.'));
    }, 100);
  })
);

// describe('Quando o tipo do animal existe', () => {
//   test('Retorne a lista de animais', () => (
//     findAnimalsByType('Dog').then((listDogs) => {
//       expect(listDogs[0].name).toEqual('Dorminhoco');
//       expect(listDogs[1].name).toEqual('Soneca');
//     })
//   ));
// });

// describe('Quando o tipo do animal, não existe', () => {
//   test('Retorne a lista de animais', () => (
//     findAnimalsByType('Lion').catch((error) => (
//       expect(error.message).toMatch('Não possui esse tipo de animal.')
//     ))
//   ));
// });

// const findAnimalsByType = (type) => (
//   new Promise((resolve) => { // linha alterada
//     setTimeout(() => {
//       const arrayAnimals = Animals.filter((animal) => animal.type === type);

//       if (arrayAnimals.length !== 0) {
//         return resolve(arrayAnimals);
//       }

//       return resolve(new Error('Não possui esse tipo de animal.')); // linha alterada
//     }, 100);
//   })
// );

// describe('Testando promise - findAnimalsByType', () => {
//   describe('Quando o tipo do animal existe', () => {
//     test('Retorne a lista de animais', () => {
//       const listDogs = [
//         { name: 'Dorminhoco', age: 1, type: 'Dog' },
//         { name: 'Soneca', age: 2, type: 'Dog' },
//       ];
//       return expect(getListAnimals('Dog')).resolves.toEqual(listDogs);
//     });
//   });

//   describe('Quando o tipo de animal não existe', () => {
//     test('Retorna um erro', () => (
//       expect(getListAnimals('Lion'))
//         .rejects.toEqual(new Error('Não possui esse tipo de animal.'))
//     ));
//   });
// });
// describe('Testando promise - findAnimalsByType', () => {
//   describe('Quando o tipo do animal existe', () => {
//     test('Retorne a lista de animais', () => {
//       const listDogs = [
//         { name: 'Dorminhoco', age: 1, type: 'Dog' },
//         { name: 'Soneca', age: 2, type: 'Dog' },
//       ];
//       return expect(getListAnimals('Dog')).resolves.toEqual(listDogs);
//     });
//   });

//   describe('Quando o tipo de animal não existe', () => {
//     test('Retorna um erro', () => (
//       expect(getListAnimals('Lion'))
//         .rejects.toEqual(new Error('Não possui esse tipo de animal.'))
//     ));
//   });
// });

// describe('Jest', () => {
//   test('Brincando com expect', () => {
//     const expectA = expect(true).toBeTruthy();
//     const expectB = expect(Promise.resolve('Oi Tryber!')).resolves.toEqual('Oi Tryber!');
//     const expectC = expect(Promise.reject(new Error('ERROR')))
//       .rejects.toEqual(new Error('ERROR'));
//     console.log('expect', expectA);
//     console.log('expect.resolves', expectB);
//     console.log('expect.rejects', expectC);
//   });
// });
// test('Testando com async/await', async () => {
//   const listDogs = await findAnimalsByType('Dog');
//   expect(listDogs[0].name).toEqual('Dorminhoco');
//   expect(listDogs[1].name).toEqual('Soneca');
// });
// test('Testando com async/await, testando o reject', async () => {
//   try {
//     await findAnimalsByType('Lion');
//   } catch (error) {
//     expect(error).toEqual(new Error('Não possui esse tipo de animal.'));
//   }
// });

// describe('Testando Async/Await - findAnimalsByType', () => {
//   describe('Quando o tipo do animal existe', () => {
//     test('Retorne a lista de animais', async () => {
//       const listDogs = [
//         { name: 'Dorminhoco', age: 1, type: 'Dog' },
//         { name: 'Soneca', age: 2, type: 'Dog' },
//       ];
//       await expect(findAnimalsByType('Dog')).resolves.toEqual(listDogs);
//     });
//   });

//   describe('Quando o tipo de animal não existe', () => {
//     test('Retorna um erro', async () => {
//       expect.assertions(1);
//       await expect(findAnimalsByType('Lion')).rejects
//         .toEqual(new Error('Não possui esse tipo de animal.'));
//     });
//   });
// });

// index.js


// index.test.js

const {
  resetCities,
  getCities,
  removeCity,
  retrieveCitiesFromCache,
  requestCities,
  isCity,
} = require('./aula.js');

describe('Retrieving cities from cache', () => {
  beforeEach(() => {
    retrieveCitiesFromCache();
  });

  afterEach(() => {
    resetCities();
  });

  it('should have only 1 city after remove Belo Horizonte', () => {
    removeCity('Belo Horizonte');
    expect(getCities().length).toBe(1);
  });

  it('should have 2 cities after retrieving from cache', () => {
    expect(getCities().length).toBe(2);
  });
});

describe('Requesting cities from api', () => {
  beforeEach(() => requestCities());

  afterEach(() => {
    resetCities();
  });

  it('should have 8 cities after requesting from api', () => {
    const cities = getCities();
    expect(cities.length).toBe(8);
  });

  it('should have the city of Belo Horizonte', () => {
    expect(isCity('Belo Horizonte')).toBeTruthy();
  });

  it('should have the city of Fortaleza', () => {
    expect(isCity('Fortaleza')).toBeTruthy();
  });

  it('should have the city of São Paulo', () => {
    expect(isCity('São Paulo')).toBeTruthy();
  });

  it('should have the city of Recife', () => {
    expect(isCity('Recife')).toBeTruthy();
  });

  it('should have the city of Porto Alegre', () => {
    expect(isCity('Porto Alegre')).toBeTruthy();
  });

  it('should have the city of Goiânia', () => {
    expect(isCity('Goiânia')).toBeTruthy();
  });

  it('should have the city of Manaus', () => {
    expect(isCity('Manaus')).toBeTruthy();
  });

  it('should have the city of Piauí', () => {
    expect(isCity('Piauí')).toBeTruthy();
  });
});