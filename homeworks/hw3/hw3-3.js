"use strict";

const isXOEqual = (str) => {
    const str1 = str.toLowerCase();
    let result = 0;
    for (let i = 0; i < str1.length; i++) {
        if ("x" === str1[i]) {
            result++;
        }
        if ("o" === str1[i]) {
            result--;
        }
    }
    return !result;
};

console.log(isXOEqual("ooxx")); // true
console.log(isXOEqual("xooxx")); // false
console.log(isXOEqual("ooxXm")); // true
console.log(isXOEqual("zpzpzpp")); // коли немає 'x' та 'o' то має повертати true бо 0 = 0
console.log(isXOEqual("zzoo")); // false
