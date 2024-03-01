import Intersection from "./intersection.js";
//const intersection = new Intersection();

const figura1 = [];
figura1[0] = { x: 0, y: 0 };
figura1[1] = { x: 100, y: 0 };
figura1[2] = { x: 150, y: 50 };
figura1[3] = { x: 100, y: 100 };
figura1[4] = { x: 50, y: 200 };
figura1[5] = { x: 0, y: 100 };

const figura2 = [];
figura2[0] = { x: 40, y: 40 };
figura2[1] = { x: 300, y: 40 };
figura2[2] = { x: 300, y: 350 };
figura2[3] = { x: 40, y: 350 };

const figura21 = [];
figura21[0] = { x: 100, y: 100 };
figura21[1] = { x: 250, y: 100 };
figura21[2] = { x: 250, y: 250 };
figura21[3] = { x: 100, y: 250 };

const figura3 = [];
figura3[0] = { x: 400, y: 20 };
figura3[1] = { x: 600, y: 20 };
figura3[2] = { x: 600, y: 400 };
figura3[3] = { x: 400, y: 400 };

const figura4 = [];
figura4[0] = { x: 350, y: -100 };
figura4[1] = { x: 450, y: -100 };
figura4[2] = { x: 500, y: 50 };
figura4[3] = { x: 400, y: 800 };

const point1 = { x: 10, y: 10 };
const point2 = { x: 500, y: 500 };

const circle1 = {x : 200, y : 200, r : 150};
const circle2 = {x : 500, y : 200, r : 70};

console.log(`Figure1 : ${figura1.reduce((a, b) => a += `{ ${b.x} , ${b.y} }, `, '')}`);
console.log(`Figure2 : ${figura2.reduce((a, b) => a += `{ ${b.x} , ${b.y} }, `, '')}`);
console.log(`Figure21 : ${figura21.reduce((a, b) => a += `{ ${b.x} , ${b.y} }, `, '')}`);
console.log(`Figure3 : ${figura3.reduce((a, b) => a += `{ ${b.x} , ${b.y} }, `, '')}`);
console.log(`Figure4 : ${figura4.reduce((a, b) => a += `{ ${b.x} , ${b.y} }, `, '')}`);
console.log(`Circle1 : { ${circle1.x} , ${circle1.y}, ${circle1.r}`);
console.log(`Circle2 : { ${circle2.x} , ${circle2.y}, ${circle2.r}`);
console.log(`Point1 = { ${point1.x}, ${point1.y} }`);
console.log(`Point2 = { ${point2.x}, ${point2.y} }`);

console.log("Is figure2 intersect figure1? = ", Intersection.isFigureIntersectFigure(figura1, figura2));

console.log("Is figure3 intersect figure1? = ", Intersection.isFigureIntersectFigure(figura1, figura3));

console.log("Is figure3 intersect figure2? = ", Intersection.isFigureIntersectFigure(figura2, figura3));

console.log("Is figure3 intersect figure4? = ", Intersection.isFigureIntersectFigure(figura3, figura4));

console.log("Is figure1 intersect cirsle1? = ", Intersection.isCircleIntersectFigure(circle1, figura1));

console.log("Is figure2 intersect cirsle1? = ", Intersection.isCircleIntersectFigure(circle1, figura2));

console.log("Is figure3 intersect cirsle1? = ", Intersection.isCircleIntersectFigure(circle1, figura3));

console.log("Is figure21 intersect cirsle1? = ", Intersection.isCircleIntersectFigure(circle1, figura21));

console.log("Is figure21 intersect cirsle1? = ", Intersection.isFigureInCircle(circle1, figura21));

console.log("Is circle2 in figure1? = ", Intersection.isCircleInFigure(circle2, figura1));

console.log("Is circle2 in figure3? = ", Intersection.isCircleInFigure(circle2, figura3));

console.log("Is figure21 in figure2? = ", Intersection.isFigureInFigure(figura2, figura21));

console.log("Is point1 in figure1? = ", Intersection.isPointInFigure(figura1, point1));

console.log("Is point1 in figure1? = ", Intersection.isPointInFigure(figura1, point2));

drawFigure(figura1, "figura1", "green", 3);
drawFigure(figura2, "figura2", "red", 3);
drawFigure(figura21, "figura21", "blue", 3);
drawFigure(figura3, "figura3", "brown", 3);
drawFigure(figura4, "figura4", "yellow", 3);
drawPoint(point1, "point1", "magenta", 3);
drawPoint(point2, "point2", "magenta", 3);
drawPoint(circle1, "circle1", "yellow", 3, circle1.r, false);
drawPoint(circle2, "circle2", "blue", 3, circle2.r, false);


function drawFigure(figure = [], figureName, color = "black", width = 1) {
    console.log(figureName,' - ', color);
    let domElement = document.createElement('canvas');
    domElement.classList.add('myfigure');    
    const ctx = domElement.getContext('2d');
    let maxX = figure[0].x;
    let maxY = figure[0].y;
    for (let i = 1; i < figure.length; i++) {
        maxX = Math.max(maxX, figure[i].x);
        maxY = Math.max(maxY, figure[i].y);
    }
    domElement.height = maxY;
    domElement.width = maxX;
    domElement.top = `${0}px`;
    domElement.left = `${0}px`;
    ctx.beginPath();
    ctx.moveTo(figure[0].x, figure[0].y);
    for (let i = 1; i < figure.length; i++) {
        ctx.lineTo(figure[i].x, figure[i].y);
    }
    ctx.lineWidth = width;
    ctx.strokeStyle = color;
    ctx.closePath();
    ctx.stroke();
    document.body.appendChild(domElement);
}

function drawPoint(point, figureName, color = "black", width = 1, radius = 5, filling = true) {
    console.log(figureName,' - ', color);
    let domElement = document.createElement('canvas');
    domElement.classList.add('myfigure');    
    const ctx = domElement.getContext('2d');
    const maxX = point.x + radius;
    const maxY = point.y + radius;
    domElement.height = maxY;
    domElement.width = maxX;
    domElement.top = `${0}px`;
    domElement.left = `${0}px`;
    ctx.beginPath();
    ctx.arc(point.x, point.y, radius, 0, 2 * Math.PI);
    ctx.lineWidth = width;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    if (filling) ctx.fill();
    ctx.stroke();
    document.body.appendChild(domElement);
}
