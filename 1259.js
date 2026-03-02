const fs = require('fs');

const input = fs.readFileSync('/dev/stdin', 'utf8').split('\n');

const N = parseInt(input[0]);
const pares = [];
const impares = [];

for (let i = 1; i <= N; i++) {
    const num = parseInt(input[i]);
    if (num % 2 === 0) {
        pares[pares.length] = num;
    } else {
        impares[impares.length] = num;
    }
}

// Insertion Sort crescente para pares
for (let i = 1; i < pares.length; i++) {
    let key = pares[i];
    let j = i - 1;
    while (j >= 0 && pares[j] > key) {
        pares[j + 1] = pares[j];
        j--;
    }
    pares[j + 1] = key;
}

// Insertion Sort decrescente para ímpares
for (let i = 1; i < impares.length; i++) {
    let key = impares[i];
    let j = i - 1;
    while (j >= 0 && impares[j] < key) {
        impares[j + 1] = impares[j];
        j--;
    }
    impares[j + 1] = key;
}

for (let i = 0; i < pares.length; i++) {
    console.log(pares[i]);
}
for (let i = 0; i < impares.length; i++) {
    console.log(impares[i]);
}
