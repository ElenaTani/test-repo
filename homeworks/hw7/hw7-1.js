'use strict';

detonatorTimer(3);

function detonatorTimer(delay) {
    
    let timerID = setInterval(() => {
        if(delay > 0) {
            console.log(delay);
        } else {
            clearInterval(timerID);
            console.log('BOOM!');
        }
        delay--;
    }
    , 1000);
}
