let custo = 100;
let valorVenda = 200;
let imposto = (custo*0.2);
let lucro;
let custoTotal = custo+imposto;

  if (custo<0 || valorVenda<0){
  console.log("Valor inválido");
  } else{
    lucro = valorVenda-custoTotal;
  console.log(lucro*1000);
  }
