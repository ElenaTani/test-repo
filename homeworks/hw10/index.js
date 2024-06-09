'use strict';

document.addEventListener("DOMContentLoaded", () => {
    const state = {
        getBackground() {   
           if (this.getButtonText() === "Turn off") {
            return "white";
           }
           return "grey";
        },
        getButtonText() {
            return localStorage.getItem("stateOfButton") || "Turn off";
        },
        getTextMessage() {
            return localStorage.getItem("lastMessage") || "";
        },
        switchState() {
            if (this.getButtonText() === "Turn off") {
                localStorage.setItem("stateOfButton", "Turn on");
                localStorage.setItem("lastMessage", `Last turn off: ${this.getDate()}`);
            } else {
                localStorage.setItem("stateOfButton", "Turn off");  
                localStorage.setItem("lastMessage", `Last turn on: ${this.getDate()}`);
            }
        },
        getDate() { 
            const d = new Date();
            return d.getDate()  + "-" + (d.getMonth()+1) + "-" + d.getFullYear() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
        }
    };

    const dom = {
        switchButton: document.querySelector("#turnOffButton"),
        setBackground(color) {
            document.body.style.backgroundColor = color;
        },
        setButtonText(text) {
            this.switchButton.innerHTML = text;
        },
        setTextMessage(text) {
            document.querySelector("#message").innerHTML = text;
        }
    };
    
    const displayState = () => {
        dom.setBackground(state.getBackground());
        dom.setButtonText(state.getButtonText());
        dom.setTextMessage(state.getTextMessage());
    }

    displayState();

    dom.switchButton.addEventListener("click", () => {
        state.switchState();
        displayState();
    });    
});
