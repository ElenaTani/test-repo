'use strict';

function someFunction(...names) {
    console.log(`Greetings ${names.join(', ')}`)
}

function slower(func, seconds) {
    return function (...parameters) {
        console.log(`Chill out, you will get you result in ${seconds} seconds`);
        setTimeout(func, seconds*1000, ...parameters)
    }
}

let slowedSomeFunction = slower(someFunction, 5);

slowedSomeFunction('Anna', 'Petro', 'Robert')
