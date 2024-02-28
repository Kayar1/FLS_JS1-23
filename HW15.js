{

    console.log('Task 1');

    class MyMarker {
        constructor(color = "black", volume = 100, consumption = 0.5) {
            this.markerColor = color;
            this.markerVolume = volume;
            this.markerConsumption = consumption;
        }
        get getConsumption() {
            return this.markerConsumption;
        }
        set setColorConsumption(value) {
            this.markerConsumption = value;
        }
        get getColor() {
            return this.markerColor;
        }
        set setColor(value) {
            this.markerColor = value;
        }
        get getVolume() {
            return this.markerVolume;
        }
        set setVolume(value) {
            this.markerVolume = value;
        }
        print = (str) => {            
            const countRest = this.markerVolume / this.markerConsumption;
            const symbolsRest = str.substring(0, countRest);
            this.markerVolume -= symbolsRest.length * this.markerConsumption;
            console.log(`Printing symbols by ${this.markerColor} color`);
            console.log(symbolsRest);        
            console.log(`VolumeRest = ${this.markerVolume}%`);    
        }
    }

    const myMarker = new MyMarker();
    myMarker.setColor = "blue";
    myMarker.print(";ihsdg;khjsd;kgjsd;kgjdflkgjldfkjgpj[p");
    myMarker.print(";ihsdg;khjsd;kgjsd;kgjdflkgjldfkjgpj[p");
    myMarker.print(";ihsdg;khjsd;kgjsd;kgjdflkgjldfkjgpj[p");
    myMarker.print(";ihsdg;khjsd;kgjsd;kgjdflkgjldfkjgpj[p");
    myMarker.print(";ihsdg;khjsd;kgjsd;kgjdflkgjldfkjgpj[p");
    myMarker.print(";ihsdg;khjsd;kgjsd;kgjdflkgjldfkjgpj[p");

    console.log('Task 4');
    class MyProMarker extends MyMarker{
        addFuel = (value) => {
            this.markerVolume += value;
            if (this.markerVolume > 100) this.markerVolume = 100;
        }
    }
    const myProMarker = new MyProMarker();
    myProMarker.setColor = "red";
    myProMarker.print(";ihsdg;khjsd;kgjsd;kgjdflkgjldfkjgpj[p");
    myProMarker.print(";ihsdg;khjsd;kgjsd;kgjdflkgjldfkjgpj[p");
    myProMarker.print(";ihsdg;khjsd;kgjsd;kgjdflkgjldfkjgpj[p");
    myProMarker.print(";ihsdg;khjsd;kgjsd;kgjdflkgjldfkjgpj[p");
    myProMarker.addFuel(50);
    myProMarker.print(";ihsdg;khjsd;kgjsd;kgjdflkgjldfkjgpj[p");
    myProMarker.print(";ihsdg;khjsd;kgjsd;kgjdflkgjldfkjgpj[p");    
}

{
    console.log('Test 2');

    class MyCircle{
        constructor(radius = 0){
            this.myRadius = radius;
        }
        get radius(){
            return this.myRadius;
        }
        set radius(value){
            this.myRadius = value; 
        }
        get diametr(){
            return this.myRadius;
        }
        get circleLength(){
            return 2 * this.myRadius;
        }
        get circleSquare(){
            return Math.PI * Math.pow(this.myRadius, 2);
        }
        get shereValue(){
            return 4 / 3 * Math.PI * Math.pow(this.myRadius, 3);
        }
    }

    const myCircle = new MyCircle();
    myCircle.radius = 10;
    console.log(`Radius = ${myCircle.radius}`);
    console.log(`Diametr = ${myCircle.diametr}`);
    console.log(`circleLength = ${myCircle.circleLength}`);
    console.log(`circleSquare = ${myCircle.circleSquare.toFixed(2)}`);
    console.log(`shereValue = ${myCircle.shereValue.toFixed(2)}`);
}

{
    console.log('Task 3');

    class Battary{
        _formFactor = ['AA', 'AAA', 'A373', 'Krona', 'C2032'];
        _reNew = ['Alkaline','NiCa','Li-ion'];
        constructor(producer, volt = 1.5, formFactor = this._formFactor[0], reNew = this._reNew[0], consumption = 0.5){
            this.producer = producer;
            this.volt = 9;
            this.formFactor = this._formFactor[0];
            this.reNew = this._reNew[0];
            this.consumption = consumption; // per month
            this.volume = 100;
        }
        working = (time) => {
            const timeRest = this.volume / this.consumption;
            let lifeRest = 0;
            if (time <= timeRest){
                lifeRest = time;
            }else if (time > timeRest){
                lifeRest = timeRest;
            }
            this.volume -= lifeRest * this.consumption;
            console.log(`Working time of ${time} = ${lifeRest}, volume rest = ${this.volume}%`);  
        }
    }
    const myBattary = new Battary();
    myBattary.working(50);
    myBattary.working(60);
    myBattary.working(35);
    myBattary.working(55);
    myBattary.working(50);
    myBattary.working(20);


    class MyTable{
        constructor(formFactor = 'circle', legCount = 3, color = 'black', height = 700, width = 700, backSize = 0, place = {x : 50, y : 50}){
            this.formFactor = formFactor; 
            this.legCount = legCount; 
            this.color = color; 
            this.height = height; 
            this.width = width; 
            this.backSize = backSize;
            this.place = place;
        }
        get getplace(){
            return this.place;
        }
        set setPlace(value){
            this.place = value;
        }
        move = (value) => {
            this.place = value;
        }
    }

    const myTable = new MyTable();
    console.log(`Table coordinate : (${myTable.place.x}, ${myTable.place.y})`);
    myTable.move({x : 100, y : 100});
    console.log(`Table coordinate : (${myTable.place.x}, ${myTable.place.y})`);

    class MyDoor{
        constructor(color = 'black', height = 700, width = 700, thickness = 50, lockPresent = true, keysCount = 5, peephole = true){
            this.color = color; 
            this.height = height; 
            this.width = width; 
            this.thickness = thickness;
            this.lockPresent = lockPresent;
            this.keysCount = keysCount;
            this.peephole = peephole;
            this.closed = true;
        }
        get getColor(){
            return this.color;
        }
        get getHeight(){
            return this.height;
        }
        get getWidth(){
            return this.width;
        }
        get getThickness(){
            return this.thickness;
        }
        get getLockPresent(){
            return this.lockPresent;
        }
        get getKeysCount(){
            return this.keysCount;
        }
        get getPeephole(){
            return this.peephole;
        }
        get getStatus(){
            return this.closed;
        }
        closeDoor = () => {
            this.closed = true;
        }
        openDoor = () => {
            this.closed = false;
        }
    }

    const myDoor = new MyDoor();
    console.log(`Door status : ${myDoor.getStatus ? `closed` : `opened`}`);
    myDoor.openDoor();
    console.log(`Door status : ${myDoor.getStatus ? `closed` : `opened`}`);
    myDoor.closeDoor();
    console.log(`Door status : ${myDoor.getStatus ? `closed` : `opened`}`);
    
    class MyConditioner{
        constructor(roomValue = 22, remotePresent = true, color = "white", temperature = {min : 15, max : 35}, power = 1500){
            this.roomValue = roomValue;
            this.remotePresent = remotePresent;
            this.color = color;
            this.temperature = temperature;
            this.power = power;
            this.program = {
                powerON : false,
                currentTemp : this.temperature.min,
            };
        }
        get getRoomValue(){
            return this.roomValue;
        }
        get getRemotePresent(){
            return this.remotePresent;
        }
        get getColor(){
            return this.color;
        }
        get getTemperature(){
            return this.temperature;
        }
        get getMinTemperature(){
            return this.temperature.min;
        }
        get getMaxTemperature(){
            return this.temperature.max;
        }
        get getPower(){
            return this.power;
        }
        turnON = () => {
            this.program.powerON = true;
        }
        turnOFF = () => {
            this.program.powerON = false;
        }
        set programTemp(value){
            if (this.temperature.min <= value && value <= this.temperature.max){
                this.program.currentTemp = value;
            }else{
                console.log(`Wrong value (${value}) - must be beetwing (${this.temperature.min},${this.temperature.max})`);                
                this.program.currentTemp = value > this.temperature.max ? this.temperature.max : this.temperature.min;
            }
        }
        get state(){
            return `PowerON = ${this.program.powerON}
            CurrentTempirature = ${this.program.currentTemp}`;
        }
    }

    const myCond = new MyConditioner();
    console.log(`Start situation : ${myCond.state}`);
    myCond.turnON();
    myCond.programTemp = 22;
    console.log(`Current situation : ${myCond.state}`);
    myCond.programTemp = 40;
    console.log(`Current situation : ${myCond.state}`);
}
