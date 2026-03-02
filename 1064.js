var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let contabilidade = 0;
let soma = 0;

for (let i = 0; i < 6; i++){
    let valor = parseFloat(lines[i]);
    if (valor > 0) {
        contabilidade++
        soma += valor;
    }
}

console.log(`${contabilidade} valores positivos`);
console.log((soma / contabilidade).toFixed(1));
