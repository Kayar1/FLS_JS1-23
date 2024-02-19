import ClientsModel from "./clients-model.js";
import ClientsView from "./clients-view.js";

export default class MenuContoller{

    constructor(){
        this.model = new ClientsModel();
        this.view = new ClientsView();
    }

    async start(){
        const {headers, data} = await this.model.load();
        this.view.render(headers, data);
    }
    async getClient(scrID){
        const {headers, data} = await this.model.load();
        this.view.renderOne(headers, data, scrID);
    }
}