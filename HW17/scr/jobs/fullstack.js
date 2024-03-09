import Worker from "./worker.js"; 

export default class Fullstack extends Worker{
    constructor(args = {}){ 
        super({title: 'Fullstack', name: args.name, salary: 3000, performance: 4});
        this.addSkill({skill: Worker.Skills.JS, experience: 1});
        this.addSkill({skill: Worker.Skills.SQL, experience: 1});
        this.addSkill({skill: Worker.Skills.HTML, experience: 1});
        this.addSkill({skill: Worker.Skills.backend, experience: 1});
        this.addSkill({skill: Worker.Skills.frontend, experience: 1});
        this.addSkill({skill: Worker.Skills.fullstack, experience: 1});
        this.addSkill({skill: Worker.Skills.junior, experience: 1});
        this.addFrameWorks('Bootstrap');
    }
}