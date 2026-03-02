const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

let O = lines[0];
let index = 1;

let soma = 0.0;
let contador = 0;

for (let i = 0; i < 12; ++i) {
  for (let j = 0; j < 12; ++j) {
    let numero = parseFloat(lines[index]);
    index++;

    if ((i < 5) && (i < j && j < 11 - i)) {
      soma += numero;
      contador++;
    }
  }
}

if (O[0] === 'S') {
  console.log(`${soma.toFixed(1)}`);
} else {
  console.log(`${(soma / contador).toFixed(1)}`);
}

