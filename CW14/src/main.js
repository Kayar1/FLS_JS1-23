import MyClock from "./my-clock.js";
import MyChicken from "./my-chicken.js";
import MyObzerver from "./my-obzerver.js";



const centerX = 350;
const centerY = 350;
const radius = 300;

const myObzerver = new MyObzerver();
const myClock = new MyClock("my-clock", centerX, centerY, radius, myObzerver);
const MyChicken = new MyChicken("my-chiken", myObzerver);
myClock.start();
