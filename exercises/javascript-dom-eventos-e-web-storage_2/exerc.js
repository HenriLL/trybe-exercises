document.querySelector('#elementoOndeVoceEsta').parentNode.style.color = "red";

document.querySelector('#primeiroFilhoDoFilho').innerHTML = "Alterando o texto!";


document.querySelector('#pai').firstChild;

document.querySelector('#elementoOndeVoceEsta').previousElementSibling;

document.querySelector('#elementoOndeVoceEsta').nextSibling;

document.querySelector('#elementoOndeVoceEsta').nextElementSibling;




//Exercício 2
/*
***Crie um irmão para elementoOndeVoceEsta .
***Crie um filho para elementoOndeVoceEsta .
***Crie um filho para primeiroFilhoDoFilho .
***A partir desse filho criado, acesse terceiroFilho .*/

let elemento = document.querySelector('#pai');
let novoElemento;
novoElemento = document.createElement('div');
novoElemento.className = 'irmao';
elemento.appendChild(novoElemento);


let selecionaElemento = document.querySelector('#elementoOndeVoceEsta');
let novoFilho = document.createElement('div');
novoFilho.className ='filhoOndeVoceEsta';
selecionaElemento.appendChild(novoFilho);

let selecionaPrimeiro = document.querySelector('#primeiroFilho');
let filhoPrimeiro = document.createElement('div');
filhoPrimeiro.className = 'filhoDoprimeiroFilho';
selecionaElemento.appendChild(filhoPrimeiro);

document.querySelector('.filhoDoprimeiroFilho').parentNode.nextElementSibling






Exercício 3
Remova todos os elementos da página, menos pai , elementoOndeVoceEsta e primeiroFilhoDoFilho .

let remocao = document.querySelector('#elementoOndeVoceEsta');
for(let key in remocao){
  let lista = remocao[key];
  if(lista.innerHTML.include)
}
*/

