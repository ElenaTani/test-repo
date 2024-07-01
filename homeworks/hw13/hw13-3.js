"use strict";

const promise = new Promise(res => res(2));
	promise.then(v => {
	        console.log(v);
	        return v * 2;
	    })
	    .then(v => {
	        console.log(v);
	        return v * 2;
	    })
	    .finally(v => {
	        console.log(v);
	        return v * 2;
	    })
	    .then(v => {
	        console.log(v);
	    });


/*
2
4
undefined
8

створюється promise за допомогою конструктора i стає fulfilled зі значенням 2

викликаються по черзі методи then і finally і їх callbacks додаються в чергу мікротаск;

оскільки promise fulfilled, колбек метода then виконується з аргументом 2, виводить в консоль 2 і повертає 4; 
наступний проміс резолвиться зі значенням 4; 

наступний колбек метода then виконується з аргументом 4, виводить в консоль 4 і повертає 8; 
наступний проміс резолвиться зі значенням 8;

колбек метода finally виконується без аргументів, виводить в консоль undefined, return ігнорується; 

наступний колбек метода then виконується з аргументом 8, виводить в консоль 8
*/