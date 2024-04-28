'use strict';

const currentMaxValue = 4589;

const valueString = currentMaxValue.toString();

const valueArr = valueString.split('');

const reversedArr = valueArr.reverse();

const reverseMaxValueStr = reversedArr.join('');

const reverseMaxValue = Number(reverseMaxValueStr);

console.log(reverseMaxValue); // 9854
console.log(typeof reverseMaxValue); // 'number'
