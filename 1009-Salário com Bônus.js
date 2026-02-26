var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let A = (lines[0])
let B = parseFloat(lines[1])
let C = parseFloat(lines[2])

const salario = (B + (C * 0.15))

console.log(`TOTAL = R$ ${salario.toFixed(2)}`)
