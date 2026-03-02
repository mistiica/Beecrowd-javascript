var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let X = parseInt(lines[0]);
for (let i = 0; i < 10; i++){
    console.log(`N[${i}] = ${X}`);
    X = X * 2;
}
