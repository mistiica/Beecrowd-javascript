var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let tempo = parseInt(lines[0]);
let velocidade = parseInt(lines[1]);

const combustivel = (tempo * velocidade) / 12 ;

console.log(`${combustivel.toFixed(3)}`);
