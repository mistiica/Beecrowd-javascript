var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let format = (n) => {
    if (n % 10 === 0) {
        return `${Math.floor(n / 10)}`;
    } else {
        return `${Math.floor(n / 10)}.${n % 10}`;
    }
};

for (let i = 0; i <= 20; i += 2) {
    for (let j = 10; j <= 30; j += 10) {
        console.log(`I=${format(i)} J=${format(j + i)}`);
    }
}
