'use strict';

detonatorTimer(3);

function detonatorTimer(delay) {
	let timerId = setTimeout(function repeat() {
        if(delay > 0) {
            console.log(delay);
            timerId = setTimeout(repeat, 1000)
        } else {
            console.log('BOOM!');
        }
        delay--;
    }, 1000)
}
