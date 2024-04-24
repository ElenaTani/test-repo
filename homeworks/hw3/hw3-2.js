"use strict";

function recursiveOddSumTo(number) {
    if (number === 1) {
        return number;
    } else {
        if (number % 2) {
            return number + recursiveOddSumTo(number - 2);
        } else {
            return recursiveOddSumTo(number - 1);
            //return number - 1 + recursiveOddSumTo(number - 3);
        }
    }
}

console.log(recursiveOddSumTo(1));
console.log(recursiveOddSumTo(9));
console.log(recursiveOddSumTo(10));
