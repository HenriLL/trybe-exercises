let salBruto = 3000;
let aliquota;
let salReduzidoAli;
let imposto;
let ir;
let parcela;
let calculoSal;
let salLiquido;

  if(salBruto<=1556.94){
    aliquota=0.08;
  }
  else if(salBruto >= 1556.95 && salBruto <= 2594.92){
    aliquota=0.09;
  }
  else if (salBruto >= 2594.93 && salBruto <= 5189.82){
    aliquota=0.11;
  }
    else{
      aliquota = 570.88;
    }
  

salReduzidoAli = salBruto - salBruto*aliquota;
console.log(salReduzidoAli);

  if(salReduzidoAli<=1903.98){
  ir=0;
  }
  else if(salReduzidoAli >= 1903.99 && salReduzidoAli <= 2826.65){
  aliquota=0.075;
  parcela=142.8
  }
  else if (salReduzidoAli >= 2826.66 && salReduzidoAli <= 3751.05){
  aliquota=0.15;
  parcela=354.8
  }
  else if (salReduzidoAli >= 3751.06 && salReduzidoAli <= 4664.68){
  aliquota=0.225;
  parcela=636.13
  }
  else{
    aliquota=0.275;
    parcela=869.36
  }
 

 calculoSal =  (aliquota*salReduzidoAli)- parcela;
 
 salLiquido = salReduzidoAli - calculoSal;
 console.log(salLiquido);

