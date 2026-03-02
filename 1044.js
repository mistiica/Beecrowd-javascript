var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const a = lines[0].split(' ')[0]
const b = lines[0].split(' ')[1]

if(a % b == 0 || b % a == 0){
    console.log('Sao Multiplos')
}else{
    console.log('Nao sao Multiplos')
}

