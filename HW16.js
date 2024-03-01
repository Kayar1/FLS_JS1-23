console.log('Tast 1');
class Person{
    #name;
    #age;
    #city;
    constructor(name, age, city){
        this.#name = name;
        this.#age = age;
        this.#city = city;
    }
    get city(){
        return this.#city;
    }
    set city(value){
        this.#city = value;
    }
    get age(){
        return this.#age;
    }
    set age(value){
        this.#age = value;
    }
    get name(){
        return this.#name;
    }
    set name(value){
        this.#name = value;
    }
    print = () => {
        console.log(`${this.#name} from ${this.#city} is ${this.#age} years old.`);
    }
}

const myPers = new Person('John', 34, 'NewYork');
myPers.print();

console.log();
console.log('Tast 2');

class Shape{
    mycolor;
    constructor(args = {}){
        this.mycolor = args.color;
    }
    get color(){
        return this.mycolor;
    }
    set color(value){
        this.mycolor = value;
    }
}

class Circle extends Shape{
    x;
    y;
    radius;
    constructor(args = {}){
        super({color : args.color});
        this.x = args.x;
        this.y = args.y;
        this.radius = args.radius;
    }
    get square(){
        return Math.PI * Math.pow(this.radius, 2);
    }
    print = () => {
        console.log(`x = ${this.x}, y = ${this.y}, radius = ${this.radius}, color = ${this.color}`);
        console.log(`square = ${this.square.toFixed(2)}`);
    }
}

class Rectungle extends Shape{
    x1;
    y1;
    x2;
    y2;
    constructor(args = {}){
        super({color : args.color});
        this.x1 = args.x1;
        this.y1 = args.y1;
        this.x2 = args.x2;
        this.y2 = args.y2;
    }
    get square(){
        return Math.abs((this.x2 - this.x1) * (this.y2 - this.y1));
    }
    print = () => {
        console.log(`x1 = ${this.x1}, y1 = ${this.y1}, x2 = ${this.x2}, y2 = ${this.y2}, color = ${this.color}`);
        console.log(`square = ${this.square.toFixed(2)}`);
    }
}

const myCirsle = new Circle({x : 0, y : 0, radius : 50, color : "red"});
const myRec = new Rectungle({x1 : 0, y1 : 0, x2 : 100, y2 : 50, color : "green"});
myCirsle.print();
myRec.print();

console.log();
console.log('Tast 3');

class BankAccount{
    #owner;
    #balance;
    constructor(owner = '', balance = 0){
        this.#owner = owner;
        this.#balance = balance;
    }
    get balance(){
        return this.#balance;
    }
    get owner(){
        return this.#owner;
    }
    collection = (value) => {
        if (value > 0) {
            this.#balance += value; 
        }else console.log('Wrong operation. Value must be positive');
    }
    incollection = (value) => {
        if (value > 0 && this.#balance >= value){
            this.#balance -= value; 
        }else console.log('Wrong operation. Value must be positive and balance must be >= value');
    }
    print = () => {
        console.log(`${this.#owner} now have ${this.#balance} balance`);
    }
}

const myAccaunt = new BankAccount('John', 1000);
myAccaunt.print();
myAccaunt.incollection(300);
myAccaunt.print();
myAccaunt.collection(500);
myAccaunt.print();
myAccaunt.incollection(400);
myAccaunt.print();
myAccaunt.incollection(400);
myAccaunt.print();
myAccaunt.incollection(400);
myAccaunt.print();
myAccaunt.incollection(300);
myAccaunt.print();

console.log();
console.log('Tast 4');

class PasswordGenerator{
    generatePassword = (length) => {
        return PasswordGenerator.generatePassword(length);
    }
    generateSecurePassword = (length) => {
        return PasswordGenerator.generateSecurePassword(length);
    }
    static generatePassword = (length) => {
        let result = '';
        //a-z
        for (let i = 0; i<length; i++){
            result += String.fromCharCode(97 + Math.floor(Math.random() * 26));
        }
        return result;
    }
    static generateSecurePassword = (length) => {
        let result = '';
        const len1 = Math.floor(length / 4);
        length -= len1 * 3;
        // A - Z
        for (let i = 0; i<len1; i++){
            result += String.fromCharCode(65 + Math.floor(Math.random() * 26));
        }
        // a-z
        for (let i = 0; i<length; i++){
            result += String.fromCharCode(97 + Math.floor(Math.random() * 26));
        }        
        //0 - 9
        for (let i = 0; i<len1; i++){
            result += String.fromCharCode(48 + Math.floor(Math.random() * 10));
        }
        // ! - /
        for (let i = 0; i<len1; i++){
            result += String.fromCharCode(33 + Math.floor(Math.random() * (47-33)));
        }
        return result;
    }
}

class PasswordManager{

    #passwords = [];

    addPassword = (id, login ,password) => {
        this.#passwords.push({id : id, login : login, password : password});
    }

    getPassword = (id) => {
        return this.#passwords.find(el => el.id === id);
    }

    print = (id) => {
        const temp = this.getPassword(id); 
        console.log(`ID = "${id}", login = "${temp.login}", password = "${temp.password}"`);
    }

    printAll = () => {
        console.log('All passwords:');
        for (let i = 0; i < this.#passwords.length; i++){
            console.log(`ID = "${this.#passwords[i].id}", login = "${this.#passwords[i].login}", password = "${this.#passwords[i].password}"`);
        }
    }
}

console.log('1 - static');
const myPasswords1 = new PasswordManager();
myPasswords1.addPassword('google.com', 'kayar@gmail.com', PasswordGenerator.generatePassword(10));
myPasswords1.addPassword('privat24.ua', '0671234578', PasswordGenerator.generateSecurePassword(20));
myPasswords1.print('privat24.ua');
myPasswords1.printAll();

console.log(' - instance');

const myPasswords2 = new PasswordManager();
const myGena = new PasswordGenerator();
myPasswords2.addPassword('i.com.ua', 'oleg@i.com.ua', myGena.generatePassword(10));
myPasswords2.addPassword('github.com', 'OlegPetrenko', myGena.generatePassword(15));
myPasswords2.addPassword('monobank.ua', '0679876532', myGena.generateSecurePassword(20));
myPasswords2.addPassword('mywork.office.com', 'OlegPetrenko', myGena.generateSecurePassword(10));
myPasswords2.print('monobank.ua');
myPasswords2.printAll();
