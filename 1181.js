var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let arrey2d = [];
let linha = parseInt(lines[0]);

let alpha = 2;

for (let i = 0; i <= 11; i++) {
    arrey2d[i] = [];
    
        for (let j = 0; j <= 11; j++) {
            arrey2d[i][j] = parseFloat(lines[alpha++]);
        }
}

let soma = 0;

    for (let x = 0; x <= 11; x++) {
        soma += arrey2d[linha][x];
    }
    
if (lines[1] === 'S') {
    console.log(soma.toFixed(1));
}
    else if (lines[1] === 'M') {
        console.log((soma / 12).toFixed(1));
    }
