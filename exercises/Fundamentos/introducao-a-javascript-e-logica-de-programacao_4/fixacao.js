let car = {
  type: "Fiat",
  model: "500",
  color: "white",
};

for (let i in car) {
  console.log(i, car[i]);
}
console.log(car);

let player = {
  name: 'Marta',
  lastName: 'Silva',
  age: 34,
  medals: {
    golden: 2,
    silver: 3,
  }
};

console.log(player.name + ' ' + player.lastName + ' '+ player.age);

player['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];
console.log(player.bestInTheWorld);
console.log(player.medals.golden);
console.log(player.medals.silver);
player.bestInTheWorld.push(2020);
console.log(player.bestInTheWorld);

let cars = ["Saab", "Volvo", "BMW"];

for (let i in cars) {
  console.log(i, cars[i]);
}
console.log(cars);