// const retornaNumeroAleatorio = () => Math.floor(Math.random() * 100);

// const divisivelPorDois = () => (retornaNumeroAleatorio() % 2) === 0;

// test('quando o número aleatório é par, a função retorna `true`', () => {
//   expect(divisivelPorDois()).toBe(true); // Como garantimos que o número retornado será par?
// });

// const service = require('./aula');

// test("#randomRgbColor", () => {
//   // testando se a função foi chamada
//   service.randomRgbColor();
//   expect(service.randomRgbColor).toHaveBeenCalled();
// });

// const service = require('./aula');

// test("#randomRgbColor", () => {
//   // testando se a função foi chamada. Não simulamos nenhum comportamento aqui, pois, para esse teste, isso não importa! Queremos saber se ela foi chamada e ponto final.
//   service.randomRgbColor = jest.fn();

//   service.randomRgbColor();
//   expect(service.randomRgbColor).toHaveBeenCalled();
// });

// const service = require('./aula');

// test("#randomRgbColor", () => {
//   // testando se a função foi chamada e qual seu retorno
//   service.randomRgbColor = jest.fn().mockReturnValue("rgb(255, 255, 255)");

//   service.randomRgbColor();
//   expect(service.randomRgbColor).toHaveBeenCalled();
//   expect(service.randomRgbColor()).toBe("rgb(255, 255, 255)");
// });
// const service = require('./aula');

// test("#randomRgbColor", () => {
//   // testando quantas vezes a função foi chamada e qual seu retorno
//   service.randomRgbColor = jest
//     .fn()
//     .mockReturnValue('default value')
//     .mockReturnValueOnce('first call')
//     .mockReturnValueOnce('second call');

//   expect(service.randomRgbColor).toHaveBeenCalledTimes(0);

//   expect(service.randomRgbColor()).toBe("first call");
//   expect(service.randomRgbColor).toHaveBeenCalledTimes(1);

//   expect(service.randomRgbColor()).toBe("second call");
//   expect(service.randomRgbColor).toHaveBeenCalledTimes(2);

//   expect(service.randomRgbColor()).toBe("default value");
//   expect(service.randomRgbColor).toHaveBeenCalledTimes(3);
// });

// const math = require('./aula');
// jest.mock("./aula");

// test("#somar", () => {
//   // Aqui testamos se função foi chamada, quantas vezes foi chamada, quais parâmetros foram usados e qual seu retorno

//   math.somar.mockImplementation((a, b) => a + b);
//   math.somar(1, 2);

//   expect(math.somar).toHaveBeenCalled();
//   expect(math.somar).toHaveBeenCalledTimes(1);
//   expect(math.somar).toHaveBeenCalledWith(1, 2);
//   expect(math.somar(1, 2)).toBe(3);
// });

