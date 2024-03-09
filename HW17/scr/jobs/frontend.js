import Worker from "./worker.js"; 

export default class Frontend extends Worker{
    constructor(args = {}){  
        super({title: 'Frontend', name: args.name, salary: 2000, performance: 3});
        this.addSkill({skill: Worker.Skills.JS, experience: 1});
        this.addSkill({skill: Worker.Skills.HTML, experience: 1});
        this.addSkill({skill: Worker.Skills.frontend, experience: 1});
        this.addSkill({skill: Worker.Skills.junior, experience: 1});
        this.addFrameWorks('Bootstrap');
    }
}