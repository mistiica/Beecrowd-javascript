var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function inverterVetor(arr) {
    const n = arr.length;
    const meio = Math.floor(n / 2); 

    for (let i = 0; i < meio; i++) {
        [arr[i], arr[n - 1 - i]] = [arr[n - 1 - i], arr[i]];
    }

    return arr;
}

inverterVetor(lines);
for (let i = 0; i < 20; i++){
    let X = parseInt(lines[i]);
    console.log(`N[${i}] = ${X}`);
}
