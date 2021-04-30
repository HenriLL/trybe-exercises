const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };


// Crie uma função que retorna o dano do dragão.
// O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo)
const dragonDamage = (dragon) => {
 dragon.damage = Math.floor(Math.random() * dragon.strength);
  if (dragon.damage < 15)
    dragon.damage = 15;
  return dragon.damage;
};
console.log(dragonDamage(dragon));


// Crie uma função que retorna o dano causado pelo warrior .
// O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).
const damageWarrior = (warrior) => {
  warrior.damage = Math.floor(Math.random() * (warrior.strength*2))
  console.log(warrior.damage)
  if (warrior.damage < warrior.strength)
  warrior.damage = warrior.strength;
  return warrior.damage
}
console.log(damageWarrior(warrior));
console.log(warrior)


// Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
// O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).
// A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso o mago tenha menos de 15 de mana o valor de dano recebe uma mensagem (Ex: "Não possui mana suficiente") e a mana gasta é 0.
// const mage = {
//   healthPoints: 130,
//   intelligence: 45,
//   mana: 125,
//   damage: undefined,
// };
// let novo = {
//   healfh: mage.healthPoints, 
//   inteli: mage.intelligence,
// };
const damageMage = (mage, dragon) => {
  dragon.healthPoints = 1000;
  const statusMage = {};
  let totalMana = 0;
  for(let turn = 1; turn < dragon.healthPoints; turn += 1){
  mage.damage = Math.floor(Math.random() * (mage.intelligence)*2)
  if(mage.damage < mage.intelligence)
    mage.damage = mage.intelligence
  dragon.healthPoints -= mage.damage;
  mage.mana -= 15;
  totalMana += 15;
  if(mage.mana < 15){
    console.log('Sem mana suficiente')
    console.log(turn)
    statusMage['damage'] = mage.damage
    statusMage['mana'] = totalMana
    return statusMage
    }
  }
}
console.log(damageMage(mage, dragon))
console.log(dragon)
console.log(mage)




