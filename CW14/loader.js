
class MyClock {
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
    alarmClockName = "my-alarm-clock";
    alarmHourName = "my-alarm-hour";
    alarmMinuteName = "my-alarm-minute";
    alarmSecondName = "my-alarm-second";
    alarmCheckbox = "my-alarm-checkbox";
    chikenGroupName = "my-chiken-group";
    audioFileName = "./XAXA/chicken.wav";
    controlAlarm = false;
    pointSize = 30;
    timer = 1000;
    radiusSecond;
    radiusMinute;
    radiusHour;
    objectName;
    centerX;
    centerY;
    radius;

    constructor(objectName, centerX, centerY, radius){
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

    alarmEvent = () => {
        document.getElementById(this.chikenGroupName).hidden = false;
        const myAudio = new Audio(this.audioFileName);
        myAudio.onended = (event) => {document.getElementById(this.chikenGroupName).hidden = true;};
        myAudio.play();
        //console.log(document.getElementById(this.chikenGroupName).hidden);
        
    }

    change = () => {        
        this.setDigitalInfo();
        this.drawArrows(this.arrowSecond, this.radiusSecond, this.maxSecondValue, this.widthSecond, this.colorSecond, this.getSeconds());
        this.drawArrows(this.arrowMinute, this.radiusMinute, this.maxMinuteValue, this.widthMinute, this.colorMinute, this.getMinutes());
        this.drawArrows(this.arrowHour, this.radiusHour, this.maxHourValue, this.widthHour, this.colorHour, this.getHour());

        if (document.getElementById(this.alarmCheckbox).checked){
            if (this.getHourDigital()===parseInt(document.getElementById(this.alarmHourName).value)&&
                this.getMinutes()===parseInt(document.getElementById(this.alarmMinuteName).value)&&
                this.getSeconds()===parseInt(document.getElementById(this.alarmSecondName).value)){
                document.getElementById(this.alarmCheckbox).checked = false;
                this.alarmEvent();
            }
        }        
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
        s += `<div class="my-alarm-box" id="${this.alarmClockName}">Alarm
                <input class="my-alarm-input" id="${this.alarmHourName}" value=00></input>
                <input class="my-alarm-input" id="${this.alarmMinuteName}" value=00></input>
                <input class="my-alarm-input" id="${this.alarmSecondName}" value=00></input>
                <input class="my-alarm-check" id="${this.alarmCheckbox}" type="checkbox"></input>
            </div>`;
        s += `<div class="${this.chikenGroupName}" id="${this.chikenGroupName}">
                <IMG height=119 src="./XAXA/image001.gif" width=74 align=baseline border=0>
                <IMG height=163 src="./XAXA/image002.gif" width=144 align=baseline border=0>
                <IMG height=131 src="./XAXA/image003.gif" width=128 align=baseline border=0>
                <IMG height=125 src="./XAXA/image004.gif" width=80 align=baseline border=0>
                <IMG height=120 src="./XAXA/image005.gif" width=106 align=baseline border=0>
                <IMG height=128 src="./XAXA/image006.gif" width=96 align=baseline border=0>
                <IMG height=125 src="./XAXA/image007.gif" width=96 align=baseline border=0>
            </div>`;

        document.getElementById(this.objectName).innerHTML = s;
        document.getElementById(this.chikenGroupName).hidden = true;
        
        for (let i = 1; i <= 12; i++) {
            const hours = document.getElementById(`${this.clockBack}${i}`);
            const x = centerX + radius * Math.cos((180 - 360 / 12 * i) * Math.PI / 180) - this.pointSize / 2;
            const y = centerY + radius * Math.sin((180 - 360 / 12 * i) * Math.PI / 180) - this.pointSize / 2;
            hours.style.top = `${x}px`;
            hours.style.left = `${y}px`;
            hours.style.width = `${this.pointSize}px`;
            hours.style.height = `${this.pointSize}px`;
        }

        this.change();
    }

}

const centerX = 350;
const centerY = 350;
const radius = 300;
const myClock = new MyClock("my-clock", centerX, centerY, radius);
myClock.start();
