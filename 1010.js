var input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();
var lines = input.split('\n');

let p1 = lines[0].split(' ');
let p2 = lines[1].split(' ');

let total = Number(p1[1]) * Number(p1[2]) + Number(p2[1]) * Number(p2[2]);

console.log("VALOR A PAGAR: R$ " + total.toFixed(2));
