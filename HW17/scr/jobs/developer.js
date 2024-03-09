import Worker from "./worker.js"; 

export default class Developer extends Worker{
    constructor(args = {}){ 
        super({title: 'Developer', name: args.name, salary: 2000, performance: 3});
        this.addSkill({skill: Worker.Skills["C#"], experience: 1});
        this.addSkill({skill: Worker.Skills.Piton, experience: 1});
        this.addSkill({skill: Worker.Skills.developer, experience: 1});
        this.addSkill({skill: Worker.Skills.junior, experience: 1});
        this.addFrameWorks('ASP.NET');
    }
}