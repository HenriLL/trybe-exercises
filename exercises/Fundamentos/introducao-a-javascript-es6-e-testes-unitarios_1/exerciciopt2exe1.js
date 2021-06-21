const fat = (num) => {
  let fato = 1;
  for ( let index = num; index > 1; index -= 1){
    fato = fato*index;
  }
  return fato;
}

console.log(fat(5));