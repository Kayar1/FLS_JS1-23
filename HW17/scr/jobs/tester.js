import Worker from "./worker.js"; 

export default class Tester extends Worker{
    constructor(args = {}){ 
        super({title: 'Tester', name: args.name, salary: 1000, performance: 2});
        this.addSkill({skill: Worker.Skills.JS, experience: 1});
        this.addSkill({skill: Worker.Skills.HTML, experience: 1});
        this.addSkill({skill: Worker.Skills.junior, experience: 1});
    }
}