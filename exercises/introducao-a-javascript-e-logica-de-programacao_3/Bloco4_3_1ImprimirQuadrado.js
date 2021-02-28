/**n = 5

*****
*****
*****
*****
***** 
*/

let n = 5;
let linha = '*';
let linha2 = '*';

  for(cont=1; cont<n; cont +=1){
   linha2 = linha2 + linha;
    
  }
  
if (n>1){
  for(index=0; index<n; index +=1){
    console.log(linha2);

  }

} else {
  console.log('Não é quadrado!');
}

