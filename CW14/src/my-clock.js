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

    constructor(objectName, centerX, centerY, radius, obzerver) {
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
        const angle = 2 * Math.PI / maxValue * currentValue;
        const x = this.centerX;
        const y = this.centerY;
        const x1 = this.centerX + radius * Math.cos((-Math.PI / 2 + angle) * Math.PI / 180);
        const y1 = this.centerY + radius * Math.sin((-Math.PI / 2 + angle) * Math.PI / 180);        
        ctx.beginPath();                
        ctx.translate(x,y);
        ctx.rotate(-Math.PI / 2 + angle);
        ctx.moveTo(0, 0);
        ctx.lineTo(radius * 0.8, - width * 5);
        ctx.lineTo(radius, 0);
        ctx.lineTo(radius * 0.8, + width * 5);
        ctx.lineTo(0, 0);
        ctx.lineTo(radius, 0);        
        ctx.fillStyle = color;
        ctx.lineWidth = width;
        ctx.strokeStyle = color;
        ctx.closePath();        
        ctx.stroke();
        ctx.translate(0,0);        
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
        return (curHour >= this.maxHourValue ? curHour - this.maxHourValue : curHour) * 60 + this.getMinutes();
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

    drawClock = () => {
        let s = '';

        for (let i = 1; i <= 12; i++) {
            s += `<canvas class="my-arrow" id="${this.clockBack}${i}">${i}</canvas>
            `;
        }

        s += `<canvas class="my-arrow" id="${this.arrowSecond}"></canvas>`;
        s += `<canvas class="my-arrow" id="${this.arrowMinute}"></canvas>`;
        s += `<canvas class="my-arrow" id="${this.arrowHour}"></canvas>`;

        s += `<div class="my-digital-box" id="${this.digitalClockName}"></div>`;

        document.getElementById(this.objectName).innerHTML = s;

        const angle = 2 * Math.PI / 12;

        for (let i = 1; i <= 12; i++) {
            const example = document.getElementById(`${this.clockBack}${i}`),
                ctx = example.getContext('2d');
            example.height = 2 * this.centerY;
            example.width = 2 * this.centerX;
            example.top = `${0}px`;
            example.left = `${0}px`;
            ctx.lineWidth = 3;
            ctx.strokeStyle = "green";
            const x = this.centerX + this.radius * Math.cos(angle * (i + 9));
            const y = this.centerY + this.radius * Math.sin(angle * (i + 9));
            ctx.arc(x, y, this.pointSize / 2, 0, 2 * Math.PI);
            ctx.fill();
            ctx.font = this.pointSize * 0.8 + "px arial";
            ctx.textBaseline = "middle";
            ctx.textAlign = "center";
            ctx.fillStyle = "yellow";
            ctx.fillText(i.toString(), x, y);
            ctx.stroke();
        }

        this.change();
    }

}