var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let distanciatotal = parseInt(lines[0]);
let totalcombustivel = parseFloat(lines[1]);

let consumoMedio = distanciatotal / totalcombustivel;

console.log(`${consumoMedio.toFixed(3)} km/l`);
