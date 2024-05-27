'use strict';

let me = {
    name: 'Lena',
    gender: 'female',
    nationality: 'Ukrainian',
    hobby: 'yoga',
    desiredMood: 'calm',
    totalYogaHours: 52,
    introduce() {
        console.log(`My name is ${this.name} and I'm ${this.nationality}`);
    },
    achiveDesiredMood(){
        console.log(`If I want to become ${this.desiredMood}, I do ${this.hobby}`);
    },
    doYoga(){
        this.totalYogaHours++;
        console.log(`When I do ${this.hobby}, total yoga hours become ${this.totalYogaHours}`);
    }
}

me.introduce();
me.achiveDesiredMood();
me.doYoga();

let securedSelfIntroduce = me.introduce.bind(me);
let securedSelfAchiveDesiredMood = me.achiveDesiredMood.bind(me);
let securedSelfDoYoga = me.doYoga.bind(me);

setTimeout(securedSelfIntroduce, 1000); 
setTimeout(securedSelfAchiveDesiredMood, 2000);
setTimeout(securedSelfDoYoga, 3000); 
