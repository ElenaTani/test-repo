"use strict";

console.log('start');

const promise1 = new Promise((resolve, reject) => {
console.log(1)
resolve(2)
})

promise1.then(res => {
console.log(res)
})

console.log('end');


/* 

start
1
end
2

спочатку виконується синхронний код console.log('start') і виводиться в консоль рядок start
потім створюється новий екземпляр promise1 
викликається функція, яка передана в конструктор promise, і в якій: 
  - виводиться в консоль 1
  - стан promise1 змінюється на fullfilled зі значенням 2 
викликається метод then, який додає функцію в чергу мікрозадач.
виводиться в консоль рядок end
після виконання синхронного коду(після того як стек виконання буде пустий, event loop візьме 
мікротаску і додасть її у стек) - виведеться в консоль 2
*/