import Worker from "./worker.js"; 

export default class Admin extends Worker{
    constructor(args = {}){ 
        super({title: 'Admin', name: args.name, salary: 2000, performance: 3});
        this.addSkill({skill: Worker.Skills.admin, experience: 1});
        this.addSkill({skill: Worker.Skills.SQL, experience: 1});
        this.addSkill({skill: Worker.Skills.junior, experience: 1});
    }
}