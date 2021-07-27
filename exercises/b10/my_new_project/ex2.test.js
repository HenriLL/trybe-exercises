// Teste se encode e decode são funções;
// Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;
// Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertido nas vogais a, e, i, o, u , respectivamente;
// Teste se as demais letras/números não são convertidos para cada caso;
// Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.

const { encode, decode } = require('./ex2');

test('Teste se encode e decode são funções;', () => {
  expect(typeof encode && typeof decode).toBe('function');
})

describe('Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
  test('Testa se converte "a" em 1', () => {
    expect(encode('alt')).toBe('1lt');
  })
  test('Testa se converte "e" em 2', () => {
    expect(encode('exe')).toBe('2x2');
  })
  test('Testa se converte "i" em 3', () => {
    expect(encode('init')).toBe('3n3t');
  })
  test('Testa se converte "o" em 4', () => {
    expect(encode('ovo')).toBe('4v4');
  })
  test('Testa se converte "u" em 5', () => {
    expect(encode('uva')).toBe('5v1');
  })
})

describe('Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertido nas vogais a, e, i, o, u , respectivamente', () => {
  test('Testa se converte "a" em 1', () => {
    expect(decode('1')).toStrictEqual('a');
  })
  test('Testa se converte "2" em e', () => {
    expect(decode('2')).toStrictEqual('e');
  })
  test('Testa se converte "3" em 1', () => {
    expect(decode('3')).toStrictEqual('i');
  })
  test('Testa se converte "4" em d', () => {
    expect(decode('4')).toStrictEqual('o');
  })
  test('Testa se converte "5" em e', () => {
    expect(decode('5')).toStrictEqual('u');
  })
})

describe('Teste se as demais letras/números não são convertidos para cada caso;', () => {
  test('Testa se converte "a" em 1', () => {
    expect(encode('alien')).toBe('1l32n');
  })
  test('Testa se converte "e" em 2', () => {
    expect(encode('const')).toBe('c4nst');
  })
  test('Testa se converte "i" em 3', () => {
    expect(decode('1l2rt1')).toBe('alerta');
  })
  test('Testa se converte "o" em 4', () => {
    expect(encode('pvp')).toBe('pvp');
  })
  test('Testa se converte "u" em 5', () => {
    expect(encode('aeiou')).toBe('12345');
  })
})

describe('Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.', () => {
  test('testando a string passada', () => {
    expect(encode('string').length).toBe(6);
  })
  test('testando a string passada', () => {
    expect(decode('seaofthieves').length).toBe(12);
  })
})