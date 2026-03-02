var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let maior = parseInt(lines[0]);
let posicao = 1

for (i = 1; i < 100; i++) {
    let valor = parseInt(lines[i]);
    
    if (valor > maior) {
        maior = valor;
        posicao = 1 + i;
    }
}

console.log(maior);
console.log(posicao);
