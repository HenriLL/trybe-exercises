let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbers2 = [];

for(let index = 0; index<numbers.length-1; index+=1){ 
  numbers2.push(numbers[index]*numbers[index+1]);
    if (index === numbers.length-1){
      numbers2.push(numbers[index]*2);
    }
  }

for(let index = 0; index<numbers.length; index+=1){ 
  
    if (index === numbers.length-1){
      
      numbers2.push(numbers[index]*2);
    }
  }
    console.log(numbers2);
  
  
  


//[45, 27, 57, 1330, 560, 800, 200, 70, 945, 54]