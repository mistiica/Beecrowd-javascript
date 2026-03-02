const fs = require('fs');

const input = fs.readFileSync('/dev/stdin', 'utf8').split(' ');

const nums = [
    parseInt(input[0]),
    parseInt(input[1]),
    parseInt(input[2])
];

const sorted = [nums[0], nums[1], nums[2]];

for (let i = 0; i < sorted.length - 1; i++) {
    for (let j = 0; j < sorted.length - 1 - i; j++) {
        if (sorted[j] > sorted[j + 1]) {
            let tmp = sorted[j];
            sorted[j] = sorted[j + 1];
            sorted[j + 1] = tmp;
        }
    }
}

for (let i = 0; i < sorted.length; i++) {
    console.log(sorted[i]);
}
console.log('');
for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
}
