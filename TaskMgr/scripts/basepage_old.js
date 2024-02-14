const DB_Menu = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSTTGO4D6XJ7HEmzKgxv46gLSTtsT9pRKaQB01GreLJVqc5IYgycthmu27d3_8XgJqj9ThtH1uLUEjX/pub?gid=448472362&single=true&output=tsv';

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

function parser(t, className){
    const rawData = t.split('\r\n').map(line => line.split('\t'));
    const heared = rawData.shift();
    const data  = [];    
    rawData.map(arr => data.push(new Menus(arr)));
    return data;
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

async function readAllData(DB_Name, className){
    let data = [];
        const res =  await fetch(DB_Name)
        .then(r => r.text())
        .then(d => {
            data = parser(d, className);            
        });
    return data;
}

async function setMenus(){
    const dataMenu = await readAllData(DB_Menu, 'Menu');
    const htmlDataGlobalMenu = getHTMLGlobalMenu(dataMenu);
    document.querySelector('.my_glogalmenu').innerHTML = htmlDataGlobalMenu;

    const htmlDataMenu = getHTMLMenu(dataMenu, 'Dictionary');
    document.querySelector('.my_verticalmenu').innerHTML = htmlDataMenu;
}

setMenus();