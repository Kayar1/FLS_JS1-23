export default class MyClock {
    currentTickValue = 0;
    maxSecondValue = 60;
    maxMinuteValue = 60;
    maxHourValue = 12 * this.maxMinuteValue;    
    maxTickValue = this.maxHourValue * this.maxMinuteValue * this.maxSecondValue;
    colorSecond = "black";
    colorMinute = "blue";
    colorHour = "red";
    widthSecond = 1;
    widthMinute = 3;
    widthHour = 5;
    arrowSecond = "my-second-arrow";
    arrowMinute = "my-minute-arrow";
    arrowHour = "my-hour-arrow";
    clockBack = "hour-";
    digitalClockName = "my-digital-clock";
    pointSize = 30;
    timer = 1000;
    radiusSecond;
    radiusMinute;
    radiusHour;
    objectName;
    centerX;
    centerY;
    radius;
    obzerver;

    constructor(objectName, centerX, centerY, radius, obzerver){
        this.obzerver = obzerver;
        this.objectName = objectName;
        this.centerX = centerX;
        this.centerY = centerY;
        this.radius = radius;
        this.radiusSecond = this.radius * 0.85;
        this.radiusMinute = this.radius * 0.75;
        this.radiusHour = this.radius * 0.6;
        this.drawClock();
    }

    start = () => {
        this.id = setInterval(this.change, this.timer);
    }

    drawArrows = (obj, radius, maxValue, width, color, currentValue) => {
        const example = document.getElementById(obj),
                     ctx = example.getContext('2d');
        example.height = 2 * this.centerY;
        example.width = 2 * this.centerX;
        example.top = `${0}px`;
        example.left = `${0}px`;
        const x = this.centerX;
        const y = this.centerY;
        const x1 = this.centerX + radius * Math.cos((-90 + 360 / maxValue * currentValue) * Math.PI / 180);
        const y1 = this.centerY + radius * Math.sin((-90 + 360 / maxValue * currentValue) * Math.PI / 180);
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x1, y1);
        ctx.lineWidth = width;
        ctx.strokeStyle = color;
        ctx.stroke();
    }

    getSeconds = () => {
        return new Date().getSeconds();
    }

    getMinutes = () => {
        return new Date().getMinutes();
    }

    getHourDigital = () => {
        return new Date().getHours();
    }

    getHour = () => {
        let curHour = new Date().getHours();
        return (curHour>=this.maxHourValue ? curHour - this.maxHourValue : curHour) * 60 + this.getMinutes();
    }

    setDigitalInfo = () => {
        document.getElementById(this.digitalClockName).innerText = this.getHourDigital().toString().padStart(2, "0") + ' : ' + this.getMinutes().toString().padStart(2, "0") + ' : ' + this.getSeconds().toString().padStart(2, "0");
    }

    change = () => {        
        this.setDigitalInfo();
        this.drawArrows(this.arrowSecond, this.radiusSecond, this.maxSecondValue, this.widthSecond, this.colorSecond, this.getSeconds());
        this.drawArrows(this.arrowMinute, this.radiusMinute, this.maxMinuteValue, this.widthMinute, this.colorMinute, this.getMinutes());
        this.drawArrows(this.arrowHour, this.radiusHour, this.maxHourValue, this.widthHour, this.colorHour, this.getHour());

        this.obzerver.notify(this.obzerver.events.NewTime, this.getHourDigital(), this.getMinutes(), this.getSeconds());       
    }

    drawClock = () =>{
        let s = '';

        for (let i = 1; i <= 12; i++) {
            s += `<div class="circle" id="${this.clockBack}${i}">${i}</div>
            `;
        }
        s += `<canvas class="my-arrow" id="${this.arrowSecond}"></canvas>`;
        s += `<canvas class="my-arrow" id="${this.arrowMinute}"></canvas>`;
        s += `<canvas class="my-arrow" id="${this.arrowHour}"></canvas>`;

        s += `<div class="my-digital-box" id="${this.digitalClockName}"></div>`;

        document.getElementById(this.objectName).innerHTML = s;
        
        for (let i = 1; i <= 12; i++) {
            const hours = document.getElementById(`${this.clockBack}${i}`);
            const x = this.centerX + this.radius * Math.cos((180 - 360 / 12 * i) * Math.PI / 180) - this.pointSize / 2;
            const y = this.centerY + this.radius * Math.sin((180 - 360 / 12 * i) * Math.PI / 180) - this.pointSize / 2;
            hours.style.top = `${x}px`;
            hours.style.left = `${y}px`;
            hours.style.width = `${this.pointSize}px`;
            hours.style.height = `${this.pointSize}px`;
        }

        this.change();
    }

}