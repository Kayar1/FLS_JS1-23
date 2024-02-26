import MyObserver from "./my-obzerver.js";
import MyClock from "./my-clock.js";
import MyChiken from "./my-chicken.js";

const centerX = 350;
const centerY = 350;
const radius = 300;

const myObzerver = new MyObserver;
const myClock = new MyClock("my-clock", centerX, centerY, radius, myObzerver);
const myChicken = new MyChiken("my-chicken", centerX, centerY, radius, myObzerver);
myClock.start();