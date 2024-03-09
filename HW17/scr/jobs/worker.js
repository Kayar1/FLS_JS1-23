export default class Worker{
    static Skills = {
        'student' : 'student', 
        'junior' : 'junior', 
        'middle' : 'middle', 
        'senior' : 'senior',
        'developer' : 'developer',
        'frontend' : 'frontend',
        'backend' : 'backend',
        'fullstack' : 'fullstack',
        'SQL' : 'SQL',
        'admin' : 'admin',
        'tester' : 'tester',
        'PM' : 'PM',
        'C#': 'C#',
        'JS': 'JS',
        'HTML': 'HTML',
        'Piton': 'Piton'
    };
    
    #title;
    #name;
    #salary;
    #skills = [];
    #frameworks = [];
    #performance;

    constructor(args = {}){   //{title, name, salary, performance}
        this.#title = args.title;
        this.#name = args.name;
        this.#salary = args.salary;
        this.#performance = args.performance;
        this.#frameworks = [];
        this.#skills = [];
    }
    get title(){
        return this.#title;
    }
    get name(){
        return this.#name;
    }
    get salary(){
        return this.#salary;
    }
    set salary(value){
        this.#salary = value;
    }
    get performance(){
        return this.#performance;
    }
    set performance(value){
        this.#performance = value;
    }
    changeExperience= (value) =>{
        this.#skills.filter(el => el.skill === value.skill).map(el => el.experience = value.experience);
    }
    addSkill = (value) => {
        this.#skills.push({skill : value.skill, experience : value.experience});
    }
    addFrameWorks = (value) => {
        this.#frameworks.push(value);
    }
    print = () => {
        let result =`<b>Worker's info:</b><br>
        `;        
        result += `Job.Title = ${this.#title}<br>`;
        result += `Prog.Name = ${this.#name}<br>`;
        result += `Prog.Salary = ${this.#salary}<br>`;
        result += `Prog.Performance = ${this.#performance}<br>`;
        result += `Prog.Skills = ${this.#skills.reduce((a, b)=> a+= `${b.skill} with ${b.experience} years<br>`,'')}`;
        result += `Prog.Frameworks = ${this.#frameworks.reduce((a, b)=> a+= `${b}<br>`,'')}`;
        return `${result}<br>`;
    }
}