import Beast from "./beast.js";
import Intersection from "./intersection.js";

const SETTINGS = {
    className: 'bear',
    tickTime: 3000,
    speed: 20,
    demotivation: 10,
}

export default class Bear extends Beast {
    health = Math.floor(Math.random() * 50 + 50);
    constructor(x, y, zoo) {
        super(x, y, zoo, SETTINGS);
        this.start(this.myTick);
    }

    myTick = () => {
        if (!this.isIntersect()) {
            this.health -= 5;
            this.renderInfo(this.health);
            if (this.health <= 0) {
                this.death();
            }
        }
    }

    isIntersect() {
        let result = false;
        const ind = this.zoo.indexOf(this);
        const myFigure = [
            { x: this.coord.x, y: this.coord.y },
            { x: this.coord.x + this.domElement.clientWidth, y: this.coord.y },
            { x: this.coord.x + this.domElement.clientWidth, y: this.coord.y + this.domElement.clientHeight },
            { x: this.coord.x, y: this.coord.y + this.domElement.clientHeight }];


        for (let i = 0; i < this.zoo.length; i++) {
            if (this.zoo[i] != undefined) {
                if (i != ind && this.zoo[i].className === 'rabbit') {
                    const rabbutFigure = [
                        { x: this.zoo[i].coord.x, y: this.zoo[i].coord.y },
                        { x: this.zoo[i].coord.x + this.zoo[i].domElement.clientWidth, y: this.zoo[i].coord.y },
                        { x: this.zoo[i].coord.x + this.zoo[i].domElement.clientWidth, y: this.zoo[i].coord.y + this.zoo[i].domElement.clientHeight },
                        { x: this.zoo[i].coord.x, y: this.zoo[i].coord.y + this.zoo[i].domElement.clientHeight }];
                    if (Intersection.isFigureIntersectFigure(myFigure, rabbutFigure) || 
                        Intersection.isFigureInFigure(myFigure, rabbutFigure)) {
                        this.addHealth();
                        console.log(`I am eating rabbit-${i}`);
                        this.zoo[i].death(`I am eated by bear-${ind}`);
                        result = true;
                    }
                }
            }
        }
        return result;
    }

    addHealth = () => {
        this.health += 50;
        if (this.health >= 100) this.health = 100;
    }
}