'use strict';

// Second way

const value = Number(prompt());
if (isNaN(value)) {
    console.log('Помилка: введіть число');
}
let i = 2;
while (i < value) {
    if (!(i % 2)){
        console.log(i);
    }
    i++;
}
