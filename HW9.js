
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
    let res = 0;

    if (zgraya.length < 3){
        zgraya.forEach(element => {
            let sum = 0;
            element.heads.forEach(element1 => sum += element1);
            res += sum;
        }); 
    }else{
        res = 1;
        zgraya.forEach(element => {
            let sum = 0;
            element.heads.forEach(element1 => sum += element1);
            res *= sum;
        }); 
    }

    return res;
}


console.log(getForce(zgraya1));
console.log(getForce(zgraya2));
console.log(getForce(zgraya3));