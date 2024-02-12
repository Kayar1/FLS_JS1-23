const DB_Clients = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSTTGO4D6XJ7HEmzKgxv46gLSTtsT9pRKaQB01GreLJVqc5IYgycthmu27d3_8XgJqj9ThtH1uLUEjX/pub?gid=0&single=true&output=tsv';
const DB_Users = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSTTGO4D6XJ7HEmzKgxv46gLSTtsT9pRKaQB01GreLJVqc5IYgycthmu27d3_8XgJqj9ThtH1uLUEjX/pub?gid=1423900919&single=true&output=tsv';
const DB_Users_Rights = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSTTGO4D6XJ7HEmzKgxv46gLSTtsT9pRKaQB01GreLJVqc5IYgycthmu27d3_8XgJqj9ThtH1uLUEjX/pub?gid=920636469&single=true&output=tsv';
const DB_Rights = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSTTGO4D6XJ7HEmzKgxv46gLSTtsT9pRKaQB01GreLJVqc5IYgycthmu27d3_8XgJqj9ThtH1uLUEjX/pub?gid=2098220145&single=true&output=tsv';
const DB_Task_Types = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSTTGO4D6XJ7HEmzKgxv46gLSTtsT9pRKaQB01GreLJVqc5IYgycthmu27d3_8XgJqj9ThtH1uLUEjX/pub?gid=1714634649&single=true&output=tsv';
const DB_Status_Types = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSTTGO4D6XJ7HEmzKgxv46gLSTtsT9pRKaQB01GreLJVqc5IYgycthmu27d3_8XgJqj9ThtH1uLUEjX/pub?gid=1573488353&single=true&output=tsv';

const DB_Menu = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSTTGO4D6XJ7HEmzKgxv46gLSTtsT9pRKaQB01GreLJVqc5IYgycthmu27d3_8XgJqj9ThtH1uLUEjX/pub?gid=448472362&single=true&output=tsv';


class Client {
    id;
    folder;
    parent;
    descr;
    full;
    city;
    contact;

    constructor(arr){
        this.id = arr[0];
        this.folder = arr[1];
        this.parent = arr[2];
        this.descr = arr[3];
        this.full = arr[4];
        this.city = arr[5];
        this.contact = [6];
    }    
}
class Users {
    id;
    access;
    descr;
    work;
    workDescr;
    contact;
    login;
    pass;
    rights;
    constructor(arr){
        this.id = arr[0];
        this.access = arr[1];
        this.descr = arr[2];
        this.work = arr[3];
        this.contact = arr[4];
        this.login = arr[5];
        this.pass = arr[6];
        this.rights = '';
        this.workDescr = '';
    }
    addRightsInfo(rightsInfo, rigthDescr){
        this.rights = '';
        rightsInfo.forEach(el => this.id === el.user_id ? this.rights += rigthDescr.find(rel => rel.id === el.right_id).descr + ', ' : false);
        if (this.rights.length > 2) this.rights.slice(-2);
        this.rights = '( '+this.rights + ' )';        
    }
    addWorkInfo(clientsInfo){
        clientsInfo.forEach(el => this.work === el.id ? this.workDescr = el.descr : false);
    }
}
class User_Rights {
    id;
    user_id;
    right_id;
    constructor(arr){
        this.id = arr[0];
        this.user_id = arr[1];
        this.right_id = arr[2];
    }
}
class Rights {
    id;
    descr;
    constructor(arr){
        this.id = arr[0];
        this.descr = arr[1];
    }
}
class Task_Types {
    id;
    descr;
    constructor(arr){
        this.id = arr[0];
        this.descr = arr[1];
    }
}
class Status_Types {
    id;
    descr;
    constructor(arr){
        this.id = arr[0];
        this.descr = arr[1];
    }
}
class Menus {
    id;
    folder;
    parent;
    descr;
    img;
    constructor(arr){
        this.id = arr[0];
        this.folder = arr[1];
        this.parent = arr[2];
        this.descr = arr[3];
        this.img = arr[4];
    }
}
class Tasks {
    id;
    constructor(){
    }
}


function parser(t, className){
    const rawData = t.split('\r\n').map(line => line.split('\t'));
    const heared = rawData.shift();
    const data  = [];    
    switch (className){
        case 'Clients': rawData.map(arr => data.push(new Client(arr))); break;
        case 'Rights': rawData.map(arr => data.push(new Rights(arr))); break;
        case 'Users': rawData.map(arr => data.push(new Users(arr))); break;
        case 'User_Rights': rawData.map(arr => data.push(new User_Rights(arr))); break;
        case 'Task Types': rawData.map(arr => data.push(new Task_Types(arr))); break;
        case 'Status Types': rawData.map(arr => data.push(new Status_Types(arr))); break;
        case 'Menu': rawData.map(arr => data.push(new Menus(arr))); break;
        default: break;
    }    
    return data;
}


function parserHeader(t){
    const rawData = t.split('\r\n').map(line => line.split('\t'));
    return rawData.shift();
}


function getString(obj, sep = ''){
    let res = '';
    res = Object.values(obj).reduce((a, b) => a + `<${sep}>${b}</${sep}>
    `, '');
    return res;
}

function getHTML(arrhead, arr, str = ''){
    const res = `<table class="basepagetable">
                    <caption>
                        <h1>${str}</h1>
                    </caption>
                    <thead>
                        <tr>
                `           + arrhead.map(el => (`<th>${el}</th>
                            `)).join('') +`
                        </tr>
                    </thead>
                    <tbody>
            `           + arr.map(el => (`<tr>
                            ${getString(el,'td')}
                        </tr>
                        `)).join('')+`
                    <tbody>
                </table>`;
    return res;
}

function getHTMLGlobalMenu(arr){
    return arr.filter(el => el.folder === "1").map(el => `<li><a href="../scripts/${el.descr}.js">${el.descr}</a></li>
    `).join('');
}

function getHTMLMenu(arr, str = ''){
    const parentID = arr.find(el => el.descr === str).id;
    const res = arr.filter(el => el.folder === "0"&&el.parent === parentID).map(el => `<li><a onclick="import('../scripts/main.js').then(module=> module.selectverticalmenu('${el.descr}'))" type="button">${el.descr}</a></li>
    `).join('');
    return res;
}

export async function selectverticalmenu(str=''){
    await viewDictionary(str);
}

async function readAllData(DB_Name, className){
    let data = [];
        const res =  await fetch(DB_Name)
        .then(r => r.text())
        .then(d => {
            data = parser(d, className);            
        });
    return data;
}

async function readAllDataNew(DB_Name, strClassName, thead, data){
    const res = await fetch(DB_Name)
    .then(r => r.text());
    parserHeader(res).forEach(el=> thead.push(el));
    parser(res, strClassName).forEach(el=> data.push(el));
}

function getColumnWidth(arr, res=[]){
    arr.forEach((el,i) => {
        if (typeof(el)==='object'){
            /*el.forEach((el1, j)=>{
                console.log(el1);
                res[j] = Math.max(res[j],el1.length);
                });*/
        }else{
            res[i] = Math.max(res[i],el.length);
        }
    });
    return res;
}

export async function viewDictionary(str=''){
    let thead = [];
    let data = [];
    switch (str){
        case 'Clients': 
            await readAllDataNew(DB_Clients, str, thead, data); 
            break;
        case 'Rights': 
            await readAllDataNew(DB_Rights, str, thead, data);
            break;
        case 'Users': 
            await readAllDataNew(DB_Users, 'Users', thead, data);
            let theadUserRights = [];
            let dataUsersRights = [];
            await readAllDataNew(DB_Users_Rights, 'User_Rights', theadUserRights, dataUsersRights);
            let theadRights = [];
            let dataRights = [];
            await readAllDataNew(DB_Rights, 'Rights', theadRights, dataRights);
            let theadClients = [];
            let dataClients = [];
            await readAllDataNew(DB_Clients, 'Clients', theadClients, dataClients);
            data.map(el => el.addRightsInfo(dataUsersRights, dataRights, thead, theadRights));
            data.map(el => el.addWorkInfo(dataClients));
            thead.splice(4,0,'work descr');
            thead.push('rights');
            break;
        case 'Task Types': 
            await readAllDataNew(DB_Task_Types, str, thead, data);
            break;
        case 'Status Types': 
            await readAllDataNew(DB_Status_Types, str, thead, data);
            break;
        default: break;
    }    
    const columnWidth = [];
    columnWidth.length = thead.length;
    columnWidth.fill(0);
    getColumnWidth(thead, columnWidth);
    getColumnWidth(data, columnWidth);
    const htmlData = getHTML(thead, data, str);
    document.querySelector('.my_table').innerHTML = htmlData; 
}

const dataMenu = await readAllData(DB_Menu, 'Menu');
const htmlDataGlobalMenu = getHTMLGlobalMenu(dataMenu);
document.querySelector('.my_glogalmenu').innerHTML = htmlDataGlobalMenu;

const htmlDataMenu = getHTMLMenu(dataMenu, 'Dictionary');
document.querySelector('.my_verticalmenu').innerHTML = htmlDataMenu;
