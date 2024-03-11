import Project from "./project.js";

export default class Company{
    constructor({name = '', tiker}){
        this.name = name;
        this.projects = [];
        this.tiker = tiker;
    }
    addGame = (game) => {
        this.projects.push(new Project({game : game.game, tiker : this.tiker}));
        return `In company ${this.name} added project = ${this.projects[this.projects.length - 1].name}`; 
    }
    addProject = (project) => {
        this.projects.push(project);
        return `In company ${this.name} added project = ${project.name}`;
    }
    addProgById = ({id, worker}) => {
        return this.projects[id].addProg(worker);
    }
    startProjectByName = (name) => {
        let result = '';
        this.projects.filter((el, ind) => {if (el.name === name && el.status < 100) result += this.projects[ind].start()});        
        return result;
    }
    startProjectById = (id) => {
        let result = 'false';
        if (this.projects[id].status < 100) result = this.projects[id].start();
        return result;
    }
    print = () => {
        let result = `<b>Company's info:</b><br>`;
        for (let key in this){
            if (this[key] === undefined) continue;
            if (typeof(this[key]) === 'function') continue;
            if (key === 'tiker') continue;
            if (typeof(this[key]) != 'object'){
                result +=`Company.${key} = ${this[key]}<br>`;
            } else{ 
                if (Array.isArray(this[key])){                    
                    result += this[key].reduce( (res, el) => res += el.print(), '');
                }else{
                    result +=this[key].print();
                }                
            } 
        }
        return result;
    }
}