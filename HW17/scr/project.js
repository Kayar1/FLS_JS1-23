import Worker from "../scr/jobs/worker.js";
import Game from "./game.js";

export default class Project{
    constructor({game, tiker}){
        if (game instanceof Game) {
            this.name = game.name;
            this.game = game;
        }else{
            console.log(222222);
            this.name = Object.entries(game)[0][1].name;
            this.game = Object.entries(game)[0][1];
        }        
        this.workers = [];
        this.status = 0;
        this.dayOfWork = 0;
        this.tiker = tiker; 
        this.tikerID = 0;       
    }

    start = () => {
        this.tikerID = this.tiker.subscribe(this.tiker.events.NEXT_DAY, this.stepDay, 0, []);
        return `<b>Staring ptoject ${this.name} with progress = ${this.status}</b>`
    }

    addProg(worker){
        this.workers.push(worker);
         return `<b>In project ${this.name} added proger = ${worker.name}</b>`;
    }

    addNewProg({name, skill, job, experience, performance}){
        this.workers.push(new Employer({name : name, skill : skill, job : job, experience : experience, performance : performance}));
        return `<b>In project ${this.name} added employer = ${name}</b>`;
    }

    delProg(worker){
        const ind = this.workers.indexOf(worker);
        delete this.workers[ind];
    }

    checkWork(){
        let result = '';
        if (this.status >= 100){
            this.status = 100;
            result += `<b>Project ${this.name} is ended ${this.status}%. Finished in ${this.dayOfWork} days</b>`;
            this.tiker.unsubscribe(this.tiker.events.NEXT_DAY, this.tikerID);
        }else{
            result += `Project ${this.name} is in work = ${this.status}%`;
        }
        return result;
    }

    stepDay = () => {
        this.status = this.workers.reduce((a, b) => a += b.performance, this.status) - this.game.complexity;
        this.dayOfWork++;
        return this.checkWork();
    }

    print = () => {
        let result = `<b>Proect's info:</b><br>`;
        for (let key in this){
            if (this[key] === undefined) continue;
            if (typeof(this[key]) === 'function') continue;
            if (key === 'tiker') continue;
            if (typeof(this[key]) != 'object'){
                result += `Project.${key} = ${this[key]}<br>`;
            } else{ 
                if (Array.isArray(this[key])){                    
                    result += this[key].reduce( (res, el) => res += el.print(), '');
                }else{
                    result += this[key].print();
                }                
            } 
        }
        return result;
    }
}