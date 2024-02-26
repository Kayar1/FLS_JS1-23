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
        ctx.translate(x, y);
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
        ctx.translate(0, 0);
    }

    get Seconds (){
        return new Date().getSeconds();
    }

    get Minutes(){
        return new Date().getMinutes();
    }

    get HourDigital(){
        return new Date().getHours();
    }

    get Hour(){
        let curHour = new Date().getHours();
        return (curHour >= this.maxHourValue ? curHour - this.maxHourValue : curHour) * 60 + this.Minutes;
    }

    setDigitalInfo = () => {
        document.getElementById(this.digitalClockName).innerText = this.HourDigital.toString().padStart(2, "0") + ' : ' + this.Minutes.toString().padStart(2, "0") + ' : ' + this.Seconds.toString().padStart(2, "0");
    }

    change = () => {
        this.setDigitalInfo();
        this.drawArrows(this.arrowSecond, this.radiusSecond, this.maxSecondValue, this.widthSecond, this.colorSecond, this.Seconds);
        this.drawArrows(this.arrowMinute, this.radiusMinute, this.maxMinuteValue, this.widthMinute, this.colorMinute, this.Minutes);
        this.drawArrows(this.arrowHour, this.radiusHour, this.maxHourValue, this.widthHour, this.colorHour, this.Hour);

        this.obzerver.notify(this.obzerver.events.NewTime, this.HourDigital, this.Minutes, this.Seconds);
    }

    drawClock = () => {
        let s = '';

        for (let i = 1; i <= 12; i++) {
            s += `<canvas class="my-arrow" id="${this.clockBack}${i}">${i}</canvas>
            `;
        }

        s += `<canvas class="my-arrow" id="${this.clockBack}0"></canvas>`;
        s += `<canvas class="my-arrow" id="${this.arrowSecond}"></canvas>`;
        s += `<canvas class="my-arrow" id="${this.arrowMinute}"></canvas>`;
        s += `<canvas class="my-arrow" id="${this.arrowHour}"></canvas>`;

        s += `<div class="my-digital-box" id="${this.digitalClockName}"></div>`;

        document.getElementById(this.objectName).innerHTML = s;

        const example = document.getElementById(`${this.clockBack}0`),
            ctx = example.getContext('2d');
        example.height = 2 * this.centerY;
        example.width = 2 * this.centerX;
        example.top = `${0}px`;
        example.left = `${0}px`;
        ctx.lineWidth = 3;
        ctx.strokeStyle = "brown";
        ctx.beginPath();
        ctx.moveTo(this.centerX, 0);
        ctx.lineTo(this.centerX * 2 + this.pointSize, this.pointSize);
        ctx.lineTo(- this.pointSize, this.pointSize);
        ctx.closePath();
        //ctx.beginPath();
        ctx.rect(this.pointSize, this.pointSize, this.centerX * 2 - 2 * this.pointSize, this.centerY * 2 - 2 * this.pointSize);
        ctx.stroke();

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