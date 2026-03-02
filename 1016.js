var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let distancia = parseInt(lines[0]);

let tempoDistancia = distancia * 2

console.log(tempoDistancia + " minutos");
