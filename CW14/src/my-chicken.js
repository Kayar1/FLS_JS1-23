
export default class MyChiken {
    constructor(objName, obzerver){
        this.obzerver = obzerver;
        this.objectName = objName;
        this.alarmCheckbox = "my-alarm-checkbox";
        this.chikenGroupName = "my-chiken-group";
        this.audioFileName = "./XAXA/chicken.wav";
        
        this.obzerver.subscibe(this.obzerver.events.NewTime, this.onNewTime);

        const s = `<div class="my-alarm-box" id="${this.alarmClockName}">Alarm
                <input class="my-alarm-input" id="${this.alarmHourName}" value=00></input>
                <input class="my-alarm-input" id="${this.alarmMinuteName}" value=00></input>
                <input class="my-alarm-input" id="${this.alarmSecondName}" value=00></input>
                <input class="my-alarm-check" id="${this.alarmCheckbox}" type="checkbox"></input>
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
    }

    alarmEvent = () =>{
        document.getElementById(this.chikenGroupName).hidden = false;
        const myAudio = new Audio(this.audioFileName);
        myAudio.onended = (event) => {document.getElementById(this.chikenGroupName).hidden = true;};
        myAudio.play();
    }

    getSeconds = () => {
        return new Date().getSeconds();
    }

    getMinutes = () => {
        return new Date().getMinutes();
    }

    getHour = () => {
        return new Date().getHours();
    }

    onNewTime = (h, m, s) => {
        if (document.getElementById(this.alarmCheckbox).checked){
            if (this.getHour()===parseInt(document.getElementById(this.alarmHourName).value)&&
                this.getMinutes()===parseInt(document.getElementById(this.alarmMinuteName).value)&&
                this.getSeconds()===parseInt(document.getElementById(this.alarmSecondName).value)){
                document.getElementById(this.alarmCheckbox).checked = false;
                this.alarmEvent();
            }
        }        
    }
}