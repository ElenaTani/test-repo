'use strict';

// Second way

let value = prompt();
if (isNaN(value)) {
    console.log('Помилка: введіть число');
}
let i = 2;
while (i <= value) {
    if (!(i % 2)){
        console.log(i);
    }
    i++;
}
