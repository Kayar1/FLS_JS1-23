import Worker from "./worker.js"; 

export default class Backend extends Worker{
    constructor(args = {}){ 
        super({title: 'Backend', name: args.name, salary: 2000, performance: 3});
        this.addSkill({skill: Worker.Skills.JS, experience: 1});
        this.addSkill({skill: Worker.Skills.SQL, experience: 1});
        this.addSkill({skill: Worker.Skills.HTML, experience: 1});
        this.addSkill({skill: Worker.Skills.backend, experience: 1});
        this.addSkill({skill: Worker.Skills.junior, experience: 1});
        this.addFrameWorks('Bootstrap');
    }
}