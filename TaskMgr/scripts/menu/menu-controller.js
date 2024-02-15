import MenuModel from "./menu-model.js";
import MenuView from "./menu-view.js";

export default class MenuContoller{

    constructor(){
        this.model = new MenuModel();
        this.viewGLobal = new MenuView();
        this.viewSub = new MenuView();
    }

    async start(){
        const data = await this.model.load();
        this.viewGLobal.renderGlobal(data);
        this.viewSub.renderSubMenu(data, this.model.getFirstFolder(data).descr);
    }



}