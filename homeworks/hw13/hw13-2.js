"use strict";

Promise.resolve(1)
		.then((x) => x + 1)
		.then((x) => { throw new Error('My Error') })
		.catch(() => 1)
		.then((x) => x + 1)
		.then((x) => console.log(x))
		.catch(console.error)

/* 

2

створюється fulfilled promise зі значенням 1;
викликаються по черзі методи then і catch і їх callbacks додаються в чергу мікротаск;

оскільки promise fulfilled, перший колбек метода then виконується з аргументом 1 і повертає 2; 
наступний проміс резолвиться зі значенням 2; 

наступний колбек виконується з аргументом 2 і повертає помилку. promise rejected з помилкою

оскільки promise rejected, колбек метода catch виконується і повертає 1. створюється fulfilled promise

наступний колбек метода then виконується з аргументом 1 і повертає 2. створюється fulfilled promise

наступний колбек метода then виконується з аргументом 2 і виводить в консоль 2. створюється fulfilled promise

колбек метода catch ігнорується, оскільки promise is fulfilled

*/