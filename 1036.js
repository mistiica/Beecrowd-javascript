var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let [A, B, C] = (lines[0]).split(" ").map(parseFloat);

const delta = Math.pow(B, 2) - (4 * A * C);

if (delta < 0 || A === 0){
    console.log("Impossivel calcular");
}else{
 const x1 =((-B) + Math.sqrt(delta)) / (2 * A);
 const x2 =((-B) - Math.sqrt(delta)) / (2 * A);
 
 console.log(`R1 = ${x1.toFixed(5)}`);
 console.log(`R2 = ${x2.toFixed(5)}`);
}
