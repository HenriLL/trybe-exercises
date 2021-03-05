let n = 5;
let symbol = '*';
let line = '';
let position = n;

for(let index = 1; index <= n ; index+=1 ){
  for(let colum = 1; colum <= n ; colum+=1){
  if(colum < position){
    line = line + ' ';
  }
  else {
    line=line+symbol;
        
  }
  
}
  console.log(line);
  line = '';
  position-=1;
}

    
  

