import Worker from "./jobs/worker.js";
import Admin from "./jobs/admin.js";
import Developer from "./jobs/developer.js";
import Frontend from "./jobs/frontend.js";
import Backend from "./jobs/backend.js";
import Fullstack from "./jobs/fullstack.js";
import Tester from "./jobs/tester.js";
import Game from "./game.js";
import Project from "./project.js";
import Company from "./company.js";
import Tiker from "./tiker.js";
import UI from "./ui.js";

UI.generateScreen();

const tiker = new Tiker(); 
function stepDay(){
    const res = tiker.notify(tiker.events.TODO);
    UI.addStatusInfo(`<b>Current day : ${tiker.notify(tiker.events.NEXT_DAY)} from run tiker!</b>`);    
    printProjects();
}

const games = [];
games.push(new Game({name : 'arcanoid', genre : Game.Genres.shuter, issue : 1980, complexity : -5}));
games.push(new Game({name : 'spacewar', genre : Game.Genres.spacelight, issue : 2000, complexity : 10}));
games.push(new Game({name : 'formula1', genre : Game.Genres.racing, issue : 2005, complexity : 5}));
games.push(new Game({name : 'warcraft', genre : Game.Genres.arcade, issue : 2010, complexity : 15}));
UI.showCombo('Games', games);

const workers = [];
workers.push(new Admin({name: 'Igor'}));
workers.push(new Admin({name: 'Egor'}));
workers.push(new Developer({name: 'John'}));
workers.push(new Developer({name: 'Eugen'}));
workers.push(new Frontend({name: 'Simon'}));
workers.push(new Frontend({name: 'Peter'}));
workers.push(new Backend({name: 'Jerry'}));
workers.push(new Backend({name: 'Alex'}));
workers.push(new Fullstack({name: 'Ivan'}));
workers.push(new Fullstack({name: 'Jack'}));
workers.push(new Tester({name: 'Anna'}));
workers.push(new Tester({name: 'Iren'}));

workers[2].changeExperience({skill: Worker.Skills.developer, experience: 5});
workers[2].addSkill({skill: Worker.Skills.middle, experience: 1});
workers[2].addSkill({skill: Worker.Skills.senior, experience: 3});
workers[2].performance += workers[2].performance;
workers[2].salary += 2000;

UI.showCombo('Workers', workers);

const projects = [];
projects.push(new Project({game : games[2], tiker : tiker}));
projects[0].addProg(workers[2]);
printProjects();

const companies = [];
companies.push(new Company({name : 'SoftServ', tiker : tiker}));
UI.addStatusInfo(companies[0].addGame({game : games[0]}));
projects.push(companies[0].projects[companies[0].projects.length - 1]);
UI.addStatusInfo(companies[0].addProject(projects[0]));

printProjects();

function printCompanies(){
    UI.showCombo('Companies', companies);
}
function printProjects(){
    UI.showCombo('Projects', projects);
}

printCompanies();

UI.addStatusInfo(companies[0].startProjectById(0));

function addProger(id1, id2, id3){
    UI.addStatusInfo(companies[id1].addProgById({id : id2, worker : workers[id3]}));
    printCompanies()
}
function start2(id1, id2){
    UI.addStatusInfo(companies[id1].startProjectById(id2));
}
function addGames(id1, id2, id3, id4, id5, id6, id7, id8){
    companies.push(new Company({name : 'EPAM', tiker : tiker}));
    UI.addStatusInfo(companies[id1].addGame({game: games[id2]}));
    const newProj = companies[id1].projects.length - 1;
    projects.push(companies[1].projects[newProj]);
    UI.addStatusInfo(companies[id1].addProgById({id : newProj, worker : workers[id3]}));
    UI.addStatusInfo(companies[id1].addProgById({id : newProj, worker : workers[id4]}));
    UI.addStatusInfo(companies[id1].addProgById({id : newProj, worker : workers[id5]}));
    UI.addStatusInfo(companies[id1].addProgById({id : newProj, worker : workers[id6]}));
    UI.addStatusInfo(companies[id1].addProgById({id : newProj, worker : workers[id7]}));
    UI.addStatusInfo(companies[id1].addProgById({id : newProj, worker : workers[id8]}));
    printProjects();
    printCompanies();
    UI.addStatusInfo(companies[id1].startProjectById(newProj));

}

tiker.subscribe(tiker.events.TODO, addProger, 0, [0, 0, 1]);
tiker.subscribe(tiker.events.TODO, start2, 5, [0, 1]);
tiker.subscribe(tiker.events.TODO, addProger, 4, [0, 1, 4]);
tiker.subscribe(tiker.events.TODO, addProger, 7, [0, 1, 7]);
tiker.subscribe(tiker.events.TODO, addGames, 25, [1, 1, 0, 2, 4, 6, 8, 10]);

tiker.id = setInterval(stepDay, 2000);