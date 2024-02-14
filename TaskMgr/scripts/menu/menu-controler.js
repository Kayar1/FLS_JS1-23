import MenuModel from "./menu-model.js";
import MenuView from "./menu-view.js";

export default class MenuContoller{
    constructor(){
        this.model = new MenuModel();
        this.view = new MenuView();
    }

    async start(){
        const data = await this.model.load();
        this.view.render(data);
    }
}