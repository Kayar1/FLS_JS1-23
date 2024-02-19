import CheckModel from "./check-model.js";

export default class CheckContoller{

    constructor(){
        this.model = new CheckModel();
    }

    async check(login, pass){
        const data = await this.model.load();
        return data.find(el => el.logname === login&& el.pass === pass);
    }
}
