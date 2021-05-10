const assert = require('assert');
// escreva a função addOne aqui

const addOne = (Array) => {
  const newArray = [];
  for (let i = 0; i < Array.length; i++){
    newArray.push(Array[i]+1);
  }
  return newArray;
};


const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepStrictEqual(output, expected);
assert.deepStrictEqual(myArray, unchanged);