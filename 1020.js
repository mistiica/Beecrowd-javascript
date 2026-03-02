var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let N = parseInt(lines[0]);

const ano = Math.trunc(N/365);
const restoano = N % 365;
const mes = Math.trunc(restoano/30);
const dia = restoano % 30;

console.log(`${ano} ano(s)`);
console.log(`${mes} mes(es)`);
console.log(`${dia} dia(s)`);
