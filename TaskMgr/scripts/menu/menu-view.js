export default class MenuView{
    constructor(){
        this.DOMGlobalMenu = document.querySelector('.my-menu-items');
    }

    getHTMLMenu(arr){
        let res = `
        <li class="nav-item my-menu-items-first-line">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>` + arr.filter(el => el.parent === "0").map(el1=>
            arr.some(el2 => el2.parent === el1.id) ? `
            <li class="nav-item dropdown">
                <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    ${el1.descr}
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">` +
            arr.filter(el2 => el2.parent === el1.id).map(el2 => el2.descr === '---driver---' ? `<li><hr class="dropdown-divider" /></li>` :`
                    <li><a class="dropdown-item my-menu-items-second-line" onclick="viewTable('${el2.descr}')">${el2.descr}</a></li>
                    `).join('') +
            `
                    </ul>
            </li>
            ` : `
            <li class="nav-item">
                <a class="nav-link active my-menu-items-first-line" aria-current="page" onclick="viewTable('${el1.descr}')">${el1.descr}</a>
            </li>`
            ).join('');
        return res;
    }

    render(arr){
        const menuHTML = this.getHTMLMenu(arr);
        this.DOMGlobalMenu.innerHTML = menuHTML;
    }
}