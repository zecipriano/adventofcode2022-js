class Elves {
    keep;
    elvesCalories = [];

    constructor(keep) {
        this.keep = keep;
    }

    push(calories) {
        this.elvesCalories.push(calories);
        this.elvesCalories.sort(function (a, b) {
            return a - b;
        });

        if (this.elvesCalories.length > this.keep) {
            this.elvesCalories.shift();
        }
    }

    totalCalories() {
        return this.elvesCalories.reduce(
            (accumulator, currentValue) => accumulator + currentValue
        )
    }
}

const { readFileSync } = require('fs');

const contents = readFileSync('input.txt', 'utf-8');

const arr = contents.split(/\r?\n/);

let sum = 0;
let elves = new Elves(3);

for (const x of arr) {
    n = parseInt(x);

    if (isNaN(n)) {
        elves.push(sum);
        sum = 0;
        continue;
    }

    sum += n;
}

elves.push(sum);

console.log(elves.totalCalories());
