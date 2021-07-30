// Escreva um teste que verifique a chamada do callback de uma função uppercase , que transforma as letras de uma palavra em letras maiúsculas. Lembre-se de ter cuidado com os falso-positivos em testes assíncronos.
// const uppercase = (str, callback) => {
//   setTimeout(() => {
//     callback(str.toUpperCase());
//   }, 500);
// };
// // solução obtida dos gabaritos
// it('uppercase "test" to equal "TEST"', (done) => {
//   uppercase('test', (str) => {
//     try {
//       expect(str).toBe('TEST');
//       done();
//     } catch (error) {
//       done(error);
//     }
//   });
// });

const users = [
  { id: 1, name: 'Mark' },
  { id: 2, name: 'Paul' },
];

const findUserById = (id) => new Promise((resolve, reject) => {
  const result = users.find((user) => user.id === id);

  if (result) {
    return resolve(result);
  }

  return reject(new Error(`User with ${id} not found.`));
});

const getUserName = (userId) => findUserById(userId).then((user) => user.name);

describe('getUserName - promise', () => {
  describe('when the user id exists', () => {
    it('returns the user name', () => (
      getUserName(1).then((data) => expect(data).toEqual('Mark'))
    ));
  });

  describe('when the user id does not exists', () => {
    it('returns an error', () => {
      expect.assertions(1);
      return getUserName(3).catch((error) =>
        expect(error.message).toMatch('User with 3 not found.'));
    });
  });
});