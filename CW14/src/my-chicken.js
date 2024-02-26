export default class MyChiken {
    constructor(objName, centerX, centerY, radius, obzerver){
        this.obzerver = obzerver;
        this.objectName = objName;
        this.alarmCheckbox = "my-alarm-checkbox";
        this.chikenGroupName = "my-chiken-group";
        this.audioFileName = "./XAXA/chicken.wav";
        this.alarmClockName = "my-alarm-clock";
        this.alarmHourName = "my-alarm-hour";
        this.alarmMinuteName = "my-alarm-minute";
        this.alarmSecondName = "my-alarm-second";
        this.alarmCheckbox = "my-alarm-checkbox";
        this.alarmClose = "my-close-button";
        this.centerX = centerX;
        this.centerY = centerY;
        this.radius = radius;
        this.obzerver.subscibe(this.obzerver.events.NewTime, this.onNewTime);
        this.obzerver.subscibe(this.obzerver.events.CloseAudio, this.onStopAudio);

        this.myAudio = new Audio(this.audioFileName);
        this.myAudio.onended = (event) => {
            this.onStopAudio();
        };

        this.drawAlarm();
        
    }

    alarmEvent = () =>{
        document.getElementById(this.chikenGroupName).hidden = false;
        document.getElementById(this.alarmClose).hidden = false;        
        this.myAudio.play();
    }

    get Seconds(){
        return new Date().getSeconds();
    }

    get Minutes(){
        return new Date().getMinutes();
    }

    get Hour(){
        return new Date().getHours();
    }

    drawAlarm = () =>{
        const s = `<div class="my-alarm-box" id="${this.alarmClockName}">Alarm
                <input class="my-alarm-input" id="${this.alarmHourName}" value=00></input>
                <input class="my-alarm-input" id="${this.alarmMinuteName}" value=00></input>
                <input class="my-alarm-input" id="${this.alarmSecondName}" value=00></input>
                <input class="my-alarm-check" id="${this.alarmCheckbox}" type="checkbox"></input>
                <button class="my-alarm-button" id="${this.alarmClose}" " type="button">Close</button>
            </div>
            <div class="${this.chikenGroupName}" id="${this.chikenGroupName}">
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
        document.getElementById(this.alarmClose).hidden = true;
        document.getElementById(this.alarmClose).addEventListener('click',()=>this.obzerver.notify(this.obzerver.events.CloseAudio));
    }

    onStopAudio = ()=>{
        this.myAudio.pause();
        document.getElementById(this.chikenGroupName).hidden = true;
        document.getElementById(this.alarmClose).hidden = true;
    }

    onNewTime = (h, m, s) => {
        if (document.getElementById(this.alarmCheckbox).checked){
            if (this.Hour===parseInt(document.getElementById(this.alarmHourName).value)&&
                this.Minutes===parseInt(document.getElementById(this.alarmMinuteName).value)&&
                this.Seconds===parseInt(document.getElementById(this.alarmSecondName).value)){
                document.getElementById(this.alarmCheckbox).checked = false;
                this.alarmEvent();
            }
        }        
    }
}