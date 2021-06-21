let num1 = 10;
let num2 = 5;
let num3 = 3;
let maior;

if((num1>num2)&&(num1>num3)){
  maior=num1;
}
  else if((num2>num3)&&(num2>num1)){
    maior=num2;
  }
  else if((num3>num2)&&(num3>num1)){
    maior=num3;
  }
console.log(maior);