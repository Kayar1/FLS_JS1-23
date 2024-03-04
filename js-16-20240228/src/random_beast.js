import Bear from "./bear.js";
import Rabbit from "./rabbit.js";

export default class RandomBeast{
    static zoo = [];
    constructor({x, y}){
        const r = Math.floor(Math.random() * 5);
        const beast = r === 0 ? new Bear(x, y, RandomBeast.zoo) : new Rabbit(x, y, RandomBeast.zoo);
        RandomBeast.zoo.push(beast);
        console.log(Date.now(), 'Created', RandomBeast.zoo);
    }
}