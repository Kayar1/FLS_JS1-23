import Beast from "./beast.js";

const SETTINGS = {
    className : 'rabbit',
    tickTime : 2000,
    speed : 20,
    demotivation : 5,
}

export default class Rabbit extends Beast{
    constructor(x, y, zoo){
        super(x, y, zoo, SETTINGS);   
        this.start();
    }
}