const { readFileSync } = require('fs');

const contents = readFileSync('input.txt', 'utf-8');

const arr = contents.split(/\r?\n/);

let max = 0;
let sum = 0;

for (const x of arr) {
    n = parseInt(x);
    
    if (isNaN(n)) {
        sum = 0;
        continue;
    }

    sum += n;
    max = Math.max(max, sum);
}

console.log(max);
