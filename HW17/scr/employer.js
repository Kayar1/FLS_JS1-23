export default class Employer{
    static Skills = {
        'student' : 'student', 
        'junior' : 'junior', 
        'middle' : 'middle', 
        'senior' : 'senior',
        'developer' : 'developer',
        'frontend' : 'frontend',
        'backend' : 'backend'
    };
    
    static Jobs = {
        'tester' : 'tester', 
        'developer' : 'developer', 
        'FrontendDeveloper' : 'FrontendDeveloper', 
        'BackendDeveloper' : 'BackendDeveloper', 
        'FullStackDeveloper' : 'FullStackDeveloper', 
        'admin' : 'admin', 
        'coder' : 'coder'
    };

    constructor({name = '', skill = Employer.Skills.junior, job = Employer.Jobs.coder, experience = 0, performance = 0}){
        this.name = name;
        this.skill = skill;
        this.job = job;
        this.experience = experience;
        this.performance = performance; //work % per day
    }
    print = () => {
        let result = `<b>Employer's info:</b><br>
        `;
        for (let key in this){
            if (typeof(this[key]) != 'function') result +=`Employer.${key} = ${this[key]}<br>`;
        }
        return result;
    }
}