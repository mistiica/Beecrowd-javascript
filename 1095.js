var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let i = 1;
let j = 60;
while(j>-1){
  console.log(`I=${i} J=${j}`)
  i = i+3;
  j = j-5;
}
