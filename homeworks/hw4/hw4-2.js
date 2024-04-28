'use strict';

const resultsArray = [1, 2, [3, [4]]];

const flatResultsArray = resultsArray.flat(Infinity);

const initValue = 1;
const productOfArray = flatResultsArray.reduce(
    (prev, current) => {
        return prev * current;
    },
    initValue  
)

console.log(productOfArray); // 24
