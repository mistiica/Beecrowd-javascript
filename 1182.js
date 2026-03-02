var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let Essacoluna = parseInt(lines[0]);
let matriz = [];
let index = 2;

for(let i =0;i<=11;i++){
    matriz[i] =[];
    for(let j = 0; j<= 11; j++){
    matriz[i][j] = parseFloat(lines[index]);
    index++;
       }
}

let soma = 0
for(let w = 0; w<= 11;w++){
    soma+= matriz[w][Essacoluna];
    
}

if(lines[1] === "S"){
    console.log(soma.toFixed(1));
}else if(lines[1] === "M"){
    
    console.log((soma/12).toFixed(1));
}
