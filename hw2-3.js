'use strict';
let string = '42559125';
let result = '';
for (let i=0; i <= string.length-1; i++) {
    if (string[i] < 5) {
        result +=  0;
    } else {
        result = result + 1;
    }
}
console.log(result);