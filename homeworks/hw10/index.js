'use strict';

const turnOffButton = document.querySelector('#turnOffButton');
const lastTurnOffElement = document.querySelector('#message');

turnOffButton.innerHTML = localStorage.getItem('stateOfButton') || "Turn off";
lastTurnOffElement.innerHTML = localStorage.getItem('lastMessage') || "";

if (turnOffButton.innerHTML === "Turn off") {
    document.body.style.backgroundColor = "white";
}
if (turnOffButton.innerHTML === "Turn on") {
    document.body.style.backgroundColor = "grey";
}

function updateStatus(){
    const d = new Date();
    const datestring = d.getDate()  + "-" + (d.getMonth()+1) + "-" + d.getFullYear() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    if (turnOffButton.innerHTML === "Turn off") {
        turnOffButton.innerHTML = "Turn on";
        document.body.style.backgroundColor = "grey";
        lastTurnOffElement.innerHTML = `Last turn off: ${datestring}`;
       
    } else {
        turnOffButton.innerHTML = "Turn off";
        document.body.style.backgroundColor = "white";
        lastTurnOffElement.innerHTML = `Last turn on: ${datestring}`;
    }  
    localStorage.setItem('stateOfButton', turnOffButton.innerHTML);
    localStorage.setItem('lastMessage', lastTurnOffElement.innerHTML); 
}

turnOffButton.addEventListener('click', updateStatus);
