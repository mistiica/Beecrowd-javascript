var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var n = parseInt(lines.shift());

for (let i = 0; i < n; i++) {
    var [a, b, c] = lines[i].split(' ').map(Number);
    var media = (a * 2 + b * 3 + c * 5) / 10;
    console.log(media.toFixed(1));
}
