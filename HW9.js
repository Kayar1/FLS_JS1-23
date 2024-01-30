console.log("Task 1 - 1");

const languages = ['classic', 'england', 'franch', 'russian'];
const dictionaryModel = [
    { key: 11, value: ' J B V В' },
    { key: 12, value: ' Q V D Д' },
    { key: 13, value: ' K H R К' },
    { key: 14, value: ' A A A Т' },
];

const cardType = ['♣️', '♠️', '♦️', '♥️'];
const maxCardNumber = 54;
const minCardNumber = 2;
const maxPicture = 13;

const getModel = function (lang = 0, m = 0) {
    let res = '';
    if (m <= 10) res = m.toString().padStart(2, ' ');
    else if (m === 15) res = 'JOKER';
    else res = dictionaryModel.find(el => el.key === m).value.substring(lang * 2, lang * 2 + 2);
    return res;
}

const getMast = function (lang = 0, m = 0) {
    return cardType[m];
}

const addCard = function (lang, m1, m2) {
    const res = {
        model: m1,
        mast: m2,
        toString: () => m1 === 15 ? `${getModel(lang, m1)} ${m2}` : `${getModel(lang, m1)} ${getMast(lang, m2)}`
    }
    return res;
};

const getKoloda = function (lang = 0) {
    let res = [maxCardNumber];

    for (i = 0; i < maxCardNumber; i++) {
        if (i < maxPicture * cardType.length) {
            const card = minCardNumber + Math.trunc(i / cardType.length);
            res[i] = addCard(lang, card, i % cardType.length);
        } else {
            res[i] = addCard(lang, 15, 3 - maxCardNumber + i);
        }
    }
    return res;
}

const newKoloda = getKoloda(0);

function generateCard() {
    return newKoloda[Math.floor(Math.random() * maxCardNumber)].toString();
}

console.log(generateCard());
console.log(generateCard());
console.log(generateCard());
console.log(generateCard());
console.log(generateCard());

console.log("Task 1");

const cards = [
    { suit: "Hearts", rank: "A"}, 
    { suit: "Coins", rank: "2"}, 
    { suit: "Swords", rank: "10"}, 
    { suit: "Bells", rank: "6"}, 
    { suit: "Leaves", rank: "K"}
]


function generateCard(){
    return cards[Math.floor(Math.random() * cards.length)];
}

console.log(generateCard()); // повертає { suit: "Hearts", rank: "A"}
console.log(generateCard()); // повертає { suit: "Coins", rank: "2"}
console.log(generateCard()); // повертає { suit: "Swords", rank: "10"}
console.log(generateCard()); // повертає { suit: "Bells", rank: "6"}
console.log(generateCard()); // повертає { suit: "Leaves", rank: "K"}

console.log("Task 2");

const one = {
    name : 'One',
    yob : 2024,
    print : () => console.log(this.name, this.yob)
    }

function info(source){
    const temp = Object.entries(source);
    let res = '';
    for (let i=0;i<temp.length;i++){
        res += `${i} :
        key : ${temp[i][0]}
        type : ${typeof(temp[i][1])}
        value : ${temp[i][1]}
        `
    }
    return res;
}

    console.log(info(one)); //Дивись скріншот


console.log("Task 3");
function decodeMorse(morse) {
    const alfabet = { 
      '.-':     'a',
      '-...':   'b',
      '-.-.':   'c',
      '-..':    'd',
      '.':      'e',
      '..-.':   'f',
      '--.':    'g',
      '....':   'h',
      '..':     'i',
      '.---':   'j',
      '-.-':    'k',
      '.-..':   'l',
      '--':     'm',
      '-.':     'n',
      '---':    'o',
      '.--.':   'p',
      '--.-':   'q',
      '.-.':    'r',
      '...':    's',
      '-':      't',
      '..-':    'u',
      '...-':   'v',
      '.--':    'w',
      '-..-':   'x',
      '-.--':   'y',
      '--..':   'z',
      '.----':  '1',
      '..---':  '2',
      '...--':  '3',
      '....-':  '4',
      '.....':  '5',
      '-....':  '6',
      '--...':  '7',
      '---..':  '8',
      '----.':  '9',
      '-----':  '0',
    };
  
    return morse.split('   ').map(a => a.split(' ').map(b => alfabet[b]).join('')).join(' ');
  }
  
 console.log(decodeMorse('.... . -.--      .--- ..- -.. .'));


console.log("Task A");

const zgraya1 = [{heads : [1,1,1]},{heads : [1,1]}]; 
const zgraya2 = [{heads : [1,1]},{heads : [1,1,1,1]},{heads : [1,1,1,1,1]}]; 
const zgraya3 = [{heads : [1,1,1]},{heads : [1,1,1]},{heads : [1,1,1]}]; 


const getForce = function(zgraya = []){
    let res = zgraya.length < 3 ? 0 : 1;

    zgraya.forEach(element => {
        let sum = 0;
        element.heads.forEach(element1 => sum += element1);
        res = zgraya.length < 3 ? res + sum : res * sum;
    }); 

    return res;
}

console.log(getForce(zgraya1));
console.log(getForce(zgraya2));
console.log(getForce(zgraya3));

console.log('TaskA - 2');

let findingRes = [];  // результат пошуку варіантів згай

const findRes = function (fr = []) {  //пощук поточної зграї в рішенях, усі сортуются спочатку, потім перевіряются на кількість та вміст
    fr.sort((a, b) => a - b);
    let finded = false;
    if (findingRes.length > 0) {
        for (let i = 0; i < findingRes.length; i++) {
            if (fr.length !== findingRes[i].length){ continue}
            let res = 0;
            for (let j = 0; j < fr.length; j++) {
                if (findingRes[i][j] === fr[j]) res++;
            }
            if (res === fr.length) {
                finded = true;
                break;
            }
        }
    }

    if (!finded) findingRes.push(Array.from(fr));

    return finded;
}

const getForce = function(tempZgraya = []){   // розрахунок силі зграї по умовам <3+ >=3*
    const res = tempZgraya.length < 3 ? tempZgraya.reduce((prev, current) => prev += current) : tempZgraya.reduce((prev, current) => prev *= current);
    return res;
}

const getNextHead = function (tempZgraya = [], headsCount = 1, heads = 1, dragon = 1) {
    while (tempZgraya.length < dragon) tempZgraya.push(1); //якщо в масиві драконів меньше чім треба то +1
    for (let i = 1; i <= headsCount; i++) {  //перебор для поточного дракону кількість голів
        if (dragon < heads) {
            getNextHead(Array.from(tempZgraya), i, heads, dragon + 1); //копя масиву драконів / кількість драконів в зграї / кількість голів /  наступний дракон
        }
        let res = tempZgraya.reduce((prev, current) => prev += current); //сума голів в зграї
        if (res > heads) break;  // якщо перебор то вихід
        if (res === heads) findRes(tempZgraya) // якщо щібрали голови то добавляємо рішення
        tempZgraya[dragon - 1]++; //плюс голова к поточному дракону
    }
}

const findZgraya = function (heads = 1) {
    for (let i = 1; i <= heads; i++) { //  для кажноговарыанту уылькості драконів у зграї - мін = 1, макс = heads
        let tempZgraya = [1];        
        getNextHead(Array.from(tempZgraya), i, heads, 1); //копя масиву драконів / кількість драконів в зграї / кількість голів /  поточний дракон
    }
}

const printZgraya = function(){
    findingRes.sort((a, b) => a.length - b.length); // Сортування масиву зграй по кількості дпаконов в зграї
    console.log(`Heads = ${heads}`);
    for (let i=0;i<findingRes.length;i++){   
       console.log(`Dragons = ${findingRes[i].length} : ${findingRes[i]}, Force = ${getForce(findingRes[i])}`);
    }
}

const heads = 11;
findZgraya(heads); //пошук
printZgraya();      // вивод
