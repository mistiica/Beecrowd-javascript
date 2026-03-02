var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function max(arr) {
    let maior = parseInt(arr[1]); // comece no primeiro número válido
    for (let i = 2; i < arr.length; i++) {
        let val = parseInt(arr[i]);
        if (val > maior) {
            maior = val;
        }
    }
    return maior;
}

let N = parseInt(lines[0]);

for (let i = 0; i <= max(lines); i++){
    let contagem = 0;
    for (let j = 1; j <= N; j++){
        if (parseInt(lines[j]) === i){
            contagem++;
        }
    } if (contagem !== 0){
        console.log(`${i} aparece ${contagem} vez(es)`);
    } 
}
