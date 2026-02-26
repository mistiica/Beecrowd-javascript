var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

A = parseInt(lines.shift());
B = parseInt(lines.shift());
console.log(`X = ${A + B}`);
