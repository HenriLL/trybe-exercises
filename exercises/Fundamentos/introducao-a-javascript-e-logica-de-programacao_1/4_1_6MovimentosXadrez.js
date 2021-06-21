let peca = "Torre";
let pecat = peca.toLowerCase();

switch (pecat) {
  case "bispo" :
    console.log("Diagonais");
    break;

  case "rei" :
     console.log("Todas, mas apenas uma por vez");
    break;

  case "dama" :
     console.log("Todas");
    break;

  case "torre" :
      console.log("Linha reta, vertical e horizontal");
    break;

  case "peao" :
      console.log("linha reta");
    break;

  case "cavalo" :
      console.log("Em *L*, podendo saltar outras peças");
    break;
    
  default:
    console.log("Peça não existe");
}
