
const SETTINGS = {
    className: 'beast',
    tickTime: 10000,
    speed: 0,
    demotivation: 5,
}

export default class Beast {
    constructor(x, y, zoo, settings = SETTINGS) {
        this.className = settings.className;
        this.tickTime = settings.tickTime;
        this.speed = settings.speed;
        this.demotivation = settings.demotivation;

        this.zoo = zoo;
        this.coord = { x, y };
        this.render();
    }

    start(addTick) {
        let tick = this.#tick;
        if (addTick) {
            tick = () => {
                this.#tick();
                addTick();
            }
        }
        this.intervalID = setInterval(tick, this.tickTime);
    }

    render() {
        this.domElement = document.createElement('div');
        this.domElement.classList.add(this.className);
        this.renderMove();
        document.body.appendChild(this.domElement);
        this.domElement.addEventListener('click', this.onClick);
    }

    renderMove() {
        this.domElement.style.top = `${this.coord.y}px`;
        this.domElement.style.left = `${this.coord.x}px`;        
    }    

    #tick = () => {
        this.randMove();
        this.renderMove();
    }

    onClick = (ev) => {
        ev.stopPropagation();
        this.death();
    }

    death(subject = '') {
        document.body.removeChild(this.domElement);
        const ind = this.zoo.indexOf(this);
        clearInterval(this.intervalID);
        delete this.zoo[ind];
        console.log(`I am killed ${subject.length > 0 ? `(${subject})` : ''}`, ind, this.className);
    }

    randMove() {
        const r = Math.floor(Math.random() * this.demotivation);
        switch (r) {
            case 0: {//top
                this.coord.y -= this.speed;
                break;
            }
            case 1: {//right
                this.coord.x += this.speed;
                break;
            }
            case 2: {//down
                this.coord.y += this.speed;
                break;
            }
            case 3: {//left
                this.coord.x -= this.speed;
                break;
            }
            default: {
                //Нічого не робити. Стояти
            }
        }
    }
    renderInfo(value) {
        this.domElement.innerText = value;
    }
}