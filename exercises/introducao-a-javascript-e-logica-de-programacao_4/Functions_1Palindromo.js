
//verificaPalindrome("arara") ;
//Retorno esperado: true
//verificaPalindrome("desenvolvimento") ;
//Retorno esperado: false

function verificaPalindrome(palavra) {
  let contador = 0;
  for(let index = 0; index < palavra.length; index+=1){
    if(palavra[index]===palavra[(palavra.length-1)-index]){
      contador+=1;
    }
  }
  if(contador==palavra.length){
    return true;
  } else { 
    return false;
  }
}
  

  console.log(verificaPalindrome("desconto"));
    
    

    
    //}
  
  

