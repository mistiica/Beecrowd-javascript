var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let N = parseInt(lines[0]);

const Horas = Math.floor(N / 3600);
const resto = N % 3600;
const minutos = Math.floor(resto / 60);
const segundos = resto % 60;

console.log(`${Horas}:${minutos}:${segundos}`);
