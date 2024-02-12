
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

export function parser(t, className){
    const rawData = t.split('\r\n').map(line => line.split('\t'));
    const headers = rawData.shift();
    const data  = [];    
    switch (className){
        case 'Client': rawData.map(arr => data.push(new Client(arr))); break;
        case 'Rights': rawData.map(arr => data.push(new Rights(arr))); break;
        case 'Users': rawData.map(arr => data.push(new Users(arr))); break;
        case 'User_Rights': rawData.map(arr => data.push(new User_Rights(arr))); break;
        case 'Task_Types': rawData.map(arr => data.push(new Task_Types(arr))); break;
        case 'Status_Types': rawData.map(arr => data.push(new Status_Types(arr))); break;
        default: break;
    }    
    return data;
}

export function getString(obj){
    let res = '';
    res = Object.values(obj).reduce((a, b) => a + `${b}`+', ', '').slice(0, -2);
    return res;
}

export async function readAllData(DB_Name, className){
    let data = [];
        const res =  await fetch(DB_Name)
        .then(r => r.text())
        .then(d => {
            data = parser(d, className);            
        });
    return Array.from(data);
}

export async function getUserInfo(userName, userPass){
    
    const DB_Clients = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSTTGO4D6XJ7HEmzKgxv46gLSTtsT9pRKaQB01GreLJVqc5IYgycthmu27d3_8XgJqj9ThtH1uLUEjX/pub?gid=0&single=true&output=tsv';
    const DB_Users = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSTTGO4D6XJ7HEmzKgxv46gLSTtsT9pRKaQB01GreLJVqc5IYgycthmu27d3_8XgJqj9ThtH1uLUEjX/pub?gid=1423900919&single=true&output=tsv';
    const DB_Users_Rights = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSTTGO4D6XJ7HEmzKgxv46gLSTtsT9pRKaQB01GreLJVqc5IYgycthmu27d3_8XgJqj9ThtH1uLUEjX/pub?gid=920636469&single=true&output=tsv';
    const DB_Rights = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSTTGO4D6XJ7HEmzKgxv46gLSTtsT9pRKaQB01GreLJVqc5IYgycthmu27d3_8XgJqj9ThtH1uLUEjX/pub?gid=2098220145&single=true&output=tsv';
    
    const dataClients = await readAllData(DB_Clients, 'Client');
    const dataRights = await readAllData(DB_Rights, 'Rights');
    const dataUsers = await readAllData(DB_Users, 'Users');
    const dataUsersRights = await readAllData(DB_Users_Rights, 'User_Rights');

    dataUsers.map(el => el.addRightsInfo(dataUsersRights, dataRights));
    dataUsers.map(el => el.addWorkInfo(dataClients));

    return dataUsers.find(el => el.login===userName&&el.pass===userPass);

}