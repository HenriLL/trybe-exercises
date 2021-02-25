let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let auxiliar;

for(let i=0; i<numbers.length; i+=1){
  for(let index=i; index<numbers.length; index+=1)
  if(numbers[index]>numbers[i]){
    auxiliar=numbers[i];
    numbers[i]=numbers[index];
    numbers[index]=auxiliar;
   
  }

}
console.log(numbers);
