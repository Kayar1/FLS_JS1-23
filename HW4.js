//Task 1

const maxDigit = 3;
const maxDigitValue = 10;
let startNumber = 0;
for (i = 0; i < maxDigit; i++) {
    startNumber += Math.floor(Math.random() * maxDigitValue) * (10 ** i);
};

console.log(`Original = ${startNumber}`);

let endNumber = 0;
let currentDigit = 0;
for (i = 1; i <= maxDigit; i++) {
    currentDigit = startNumber % (10 ** i);
    //console.log(`1 - ${currentDigit}`);
    for (j = i - 1; j < i; j++) {
        currentDigit = Math.trunc(currentDigit / (10 ** j));
        //console.log(`2 - ${currentDigit}`);
    }
    endNumber += currentDigit * (10 ** (maxDigit - i));
    //console.log(`3 - ${currentDigit} - ${endNumber}`);
}

console.log(`Transponir = ${endNumber}`);

//Original = 631
//Transponir = 136

//Original = 832
//Transponir = 238

//Task 2

const maxDistance = 1000;
const maxHours = 100;
const distance = Math.floor(Math.random() * maxDistance + 1);
const hours = Math.floor(Math.random() * maxHours + 1);
const speed = (distance / hours).toFixed(2);

console.log(`Distance = ${distance}, Hours = ${hours}, Speed = ${speed}`);

//Distance = 921, Hours = 31, Speed = 29.71
//Distance = 201, Hours = 50, Speed = 4.02
//Distance = 845, Hours = 97, Speed = 8.71
//Distance = 969, Hours = 12, Speed = 80.75

//Task 3

const maxDigitValue2 = 10;
const phoneMask = '+38(0xx)xxx-xx-xx';
let phoneNumber = '';

for (i = 0; i < phoneMask.length; i++) {
    if (phoneMask[i] === 'x') {
        const newDigit = Math.floor(Math.random() * maxDigitValue2);
        phoneNumber += newDigit;
    } else phoneNumber += phoneMask[i];
}

console.log(phoneNumber);

//+38(055)674-36-13
//+38(053)343-28-25
//+38(021)652-76-37
//+38(072)299-22-90


//Task 4

const colorsName = [
    'Red',
    'Orange',
    'Yellow',
    'Green',
    'LightBlue',
    'Blue',
    'Violet'
];

const currentColor = colorsName[Math.floor(Math.random() * colorsName.length)];

console.log(currentColor);

//Yellow
//Violet

//Task 5
const maxDigitValue3 = 10;
const maxVariant = 20;
const currentVariant = Math.floor(Math.random() * maxVariant + 1);

for (i = 2; i < maxDigitValue3; i++) {
    const currentValue = currentVariant * i;

    console.log(`${currentVariant} x ${i} = ${currentValue.toString().padStart(3, '0')}`);
}

//3 x 2 = 006
//3 x 3 = 009
//3 x 4 = 012
//3 x 5 = 015
//3 x 6 = 018
//3 x 7 = 021
//3 x 8 = 024
//3 x 9 = 027

//16 x 2 = 032
//16 x 3 = 048
//16 x 4 = 064
//16 x 5 = 080
//16 x 6 = 096
//16 x 7 = 112
//16 x 8 = 128
//16 x 9 = 144

//Task 6

const minSymbolCount = 3;
const maxSymbolCount = 10;
const maxPictuteType = 4;

const currentSymbolCount = Math.floor(Math.random() * (maxSymbolCount - minSymbolCount) + minSymbolCount);
const currentPictureType = Math.floor(Math.random() * maxPictuteType + 1);

console.log(`Current Symbol Count = ${currentSymbolCount}`);
console.log(`Current Picture Type = ${currentPictureType}`);

for (i = 1; i <= currentSymbolCount; i++) {
    let currentPicture = '';
    switch (currentPictureType) {
        case 1: {
            currentPicture = ''.padStart(i, '*');
            break;
        }
        case 2: {
            currentPicture = ''.padStart(currentSymbolCount + 1 - i, '*');
            break;
        }
        case 3: {
            currentPicture = ''.padStart(currentSymbolCount + 1 - i, '*').padStart(currentSymbolCount, ' ');;
            break;
        }
        case 4: {
            currentPicture = ''.padStart(i, '*').padStart(currentSymbolCount, ' ');
            break;
        }
        default: {
            console.log(`There are no picture variant to type = ${currentPictureType}`);
            break;
        }
    }
    console.log(currentPicture);
}

//Current Symbol Count = 5
//Current Picture Type = 4
//*
//**
//***
//****
//*****

//Current Symbol Count = 9
//Current Picture Type = 3
//*********
// ********
//  *******
//   ******
//    *****
//     ****
//      ***
//       **
//        *

//Current Symbol Count = 6
//Current Picture Type = 2
//******
//*****
//****
//***
//**
//*


//Current Symbol Count = 4
//Current Picture Type = 1
//*
//**
//***
//****


//Task Alfa


const maxCardNumber = 14;
const minCardNumber = 2;
const maxCardType = 4;

for (card = minCardNumber; card <= maxCardNumber; card++) {
    let cardName = '';
    switch (card) {
        case 11: cardName = 'J'; break;
        case 12: cardName = 'Q'; break;
        case 13: cardName = 'K'; break;
        case 14: cardName = 'A'; break;
        default: cardName = card.toString();
    }

    cardName = cardName.padStart(2, ' ');
    let cardString = '';

    //♣️♦️♥️♠️
    let cardType;

    for (cardtypeNumber = 1; cardtypeNumber <= maxCardType; cardtypeNumber++) {
        switch (cardtypeNumber) {
            case 1: cardType = '♣️'; break;
            case 2: cardType = '♠️'; break;
            case 3: cardType = '♦️'; break;
            case 4: cardType = '♣️'; break;
            default: cardType = '';
        }

        cardString += `${cardName}${cardType}      `;

    }
    console.log(cardString);
}

// 2♣️       2♠️       2♦️       2♣️      
// 3♣️       3♠️       3♦️       3♣️      
// 4♣️       4♠️       4♦️       4♣️      
// 5♣️       5♠️       5♦️       5♣️      
// 6♣️       6♠️       6♦️       6♣️      
// 7♣️       7♠️       7♦️       7♣️      
// 8♣️       8♠️       8♦️       8♣️      
// 9♣️       9♠️       9♦️       9♣️      
//10♣️      10♠️      10♦️      10♣️      
// J♣️       J♠️       J♦️       J♣️      
// Q♣️       Q♠️       Q♦️       Q♣️      
// K♣️       K♠️       K♦️       K♣️      
// A♣️       A♠️       A♦️       A♣️  


//Task Bravo


const width = Math.floor(Math.random() * 19 + 5);
const height = Math.floor(Math.random() * 19 + 5);
const SYMB = '*';
const EOL = '\n';
console.log(`Width = ${width}, Height = ${height}`);
console.log('Original o(n^2)');
let image = '';
for (let i = 0; i < height; i++) {
    let line = '';
    for (let i = 0; i < width; i++) {
        line += SYMB;
    }
    image += line + EOL;
}
console.log(image);


console.log('o(n)');
let image1 = '';
for (i = 0; i < (width * height); i++) {
    image1 += SYMB;
    if (image1.length % width === 0) image1 += EOL;
}

console.log(image);


//Width = 9, Height = 8
//Original o(n^2)
//*********
//*********
//*********
//*********
//*********
//*********
//*********
//*********

//o(n)
//*********
//*********
//*********
//*********
//*********
//*********
//*********
//*********

//Task CharlIE

const maxValue = 12;
const maxPad = `${maxValue * maxValue}`.length;

for (i = 1; i <= maxValue; i++){
    let line = `${i}`.padStart(maxPad,' ');
    for (j = 2; j <= maxValue; j++){
        line += '\t' + `${i * j}`.padStart(maxPad,' ');
    }
    console.log(line);
}

//  1	  2	  3	  4	  5	  6	  7	  8	  9	 10	 11	 12
//  2	  4	  6	  8	 10	 12	 14	 16	 18	 20	 22	 24
//  3	  6	  9	 12	 15	 18	 21	 24	 27	 30	 33	 36
//  4	  8	 12	 16	 20	 24	 28	 32	 36	 40	 44	 48
//  5	 10	 15	 20	 25	 30	 35	 40	 45	 50	 55	 60
//  6	 12	 18	 24	 30	 36	 42	 48	 54	 60	 66	 72
//  7	 14	 21	 28	 35	 42	 49	 56	 63	 70	 77	 84
//  8	 16	 24	 32	 40	 48	 56	 64	 72	 80	 88	 96
//  9	 18	 27	 36	 45	 54	 63	 72	 81	 90	 99	108
// 10	 20	 30	 40	 50	 60	 70	 80	 90	100	110	120
// 11	 22	 33	 44	 55	 66	 77	 88	 99	110	121	132
// 12	 24	 36	 48	 60	 72	 84	 96	108	120	132	144
s