const fat = (n) => {
  let fat =1
for (let i = 1; i <= 4; i++) {
  fat = fat*i;
}
return fat
}

console.log(fat(4))