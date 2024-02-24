export default class MyMain {
    constructor(){
        
    }
    start = async () => {

        const centerX = 350;
        const centerY = 350;
        const radius = 300;

        const myObzerver = new (await import("./my-obzerver.js")).default;
        const myClock = new (await import("./my-clock.js")).default("my-clock", centerX, centerY, radius, myObzerver);
        const myChicken = new (await import("./my-chicken.js")).default("my-chicken", myObzerver);
        myClock.start();

        return myObzerver;
    }
}