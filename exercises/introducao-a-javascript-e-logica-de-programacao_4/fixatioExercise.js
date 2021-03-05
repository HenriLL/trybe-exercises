let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 };

let player ={
  name: 'Marta',
  lastName: 'Silva',
  age: 34,
  medals: {
    golden: 2,
    silver: 3
  }
}

// "A jogadora Marta Silva tem 34 anos de idade"

console.log("A jogadora "+ player.name + " "+player.lastName+" tem "+ player.age + " anos de idade");

// let bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];

player['bestInTheWorld']=[2006, 2007, 2008, 2009, 2010, 2018];

console.log(player['bestInTheWorld'].length);
console.log(player.bestInTheWorld.length);



