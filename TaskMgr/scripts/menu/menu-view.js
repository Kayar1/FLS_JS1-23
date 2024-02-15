export default class MenuView{
    constructor(){
        this.DOMGlobalMenu = document.querySelector('.my_glogalmenu');
        this.DOMSubMenu = document.querySelector('.my_verticalmenu');
    }

    getHTMLGlobalMenu(arr){
        return arr.filter(el => el.folder === "1").map(el => `<li><a href="../scripts/${el.descr}.js">${el.descr}</a></li>
        `).join('');
    }

    getHTMLSubMenu(arr, folderdescr = ''){
        const parentID = arr.find(el => el.descr === folderdescr).id;
        const res = arr.filter(el => el.folder === "0"&&el.parent === parentID).map(el => `<li><a onclick="import('../scripts/main.js').then(module=> module.selectverticalmenu('${el.descr}'))" type="button">${el.descr}</a></li>
        `).join('');
        return res;
    }

    renderGlobal(arr){
        const menuHTML = this.getHTMLGlobalMenu(arr);
        this.DOMGlobalMenu.innerHTML = menuHTML;
    }

    renderSubMenu(arr, folderdescr){
        const menuHTML = this.getHTMLSubMenu(arr, folderdescr);
        this.DOMSubMenu.innerHTML = menuHTML;
    }
}