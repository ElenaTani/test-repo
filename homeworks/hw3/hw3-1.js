"use strict";

function iterativeOddSumTo(number) {
    let result = 0;
    for (let i = 1; i <= number; i += 2) {
        result += i;
    }
    return result;
}

console.log(iterativeOddSumTo(1)) // 1
console.log(iterativeOddSumTo(9)) // 25
console.log(iterativeOddSumTo(10)) // 25
