export default class MenuView{
    constructor(){
        this.DOMRoutines = document.querySelector('.my_glogalmenu');
    }

    getHTMLGlobalMenu(arr){
        return arr.filter(el => el.folder === "1").map(el => `<li><a href="../scripts/${el.descr}.js">${el.descr}</a></li>
        `).join('');
    }

    render(arr){
        const menuHTML = this.getHTMLGlobalMenu(arr);
        this.DOMRoutines.innerHTML = menuHTML;
    }
}