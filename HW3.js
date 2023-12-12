//Task 1

const deltaH = 100;
const deltaD = 100;
const cilinder = {height : Math.floor(Math.random() * deltaH + 1), diam : Math.floor(Math.random() * deltaD + 1), value : 0};
cilinder.value = Math.PI * cilinder.diam ** 2 / 4 * cilinder.height;
console.log(cilinder);

//{ height: 73, diam: 9, value: 4644.059340169111 }


// Task 2

const maxValue = 7;
const dayNumber = Math.floor(Math.random() * maxValue + 1);
let dayOfWeek;
switch (dayNumber){    
    case 1: dayOfWeek = 'Monday'; break;
    case 2: dayOfWeek = 'Tuesday'; break;
    case 3: dayOfWeek = 'Wednesday'; break;
    case 4: dayOfWeek = 'Thursday'; break;
    case 5: dayOfWeek = 'Friday'; break;
    case 6: dayOfWeek = 'Saturday'; break;
    case 7: dayOfWeek = 'Sunday'; break;
    default: break;
}

console.log(`${dayNumber} - ${dayOfWeek}`);

//4 - Thursday

//Task 3

const maxPinValue = 9;
const digitsNumber = 4;
let pinCode = '';
for (i = 0; i < digitsNumber; i++){
    const pinNumber = Math.floor(Math.random() * maxPinValue + 1);
    pinCode = pinCode + pinNumber;
}

console.log(pinCode);

//8735


//Task 4

const maxPlaceInVagon_Cupe = 36;
const maxPlaceInVagon_Side = 16;
const maxPlaceInCupe = 4;
const maxPlaceInSide = 2;

const currentPlace = Math.floor(Math.random() * (maxPlaceInVagon_Cupe + maxPlaceInVagon_Side) + 1);
let currentCupe = 0;

if (currentPlace > maxPlaceInVagon_Cupe){
    const maxCupeCount = Math.trunc(maxPlaceInVagon_Cupe / maxPlaceInCupe);
    const currentPlaceTemp = currentPlace - maxPlaceInVagon_Cupe;
    const currentCupeTemp = Math.trunc(currentPlaceTemp / maxPlaceInSide);
    currentCupe = maxCupeCount + 1 - ((currentPlaceTemp % maxPlaceInSide) === 0 ? currentCupeTemp : (currentCupeTemp + 1));
}else{    
    const currentCupeTemp = Math.trunc(currentPlace / maxPlaceInCupe);
    currentCupe = currentPlace % maxPlaceInCupe === 0 ? currentCupeTemp : (currentCupeTemp + 1);
}

console.log(` Place ${currentPlace} is in ${currentCupe} cupe!`);

//Place 24 is in 6 cupe!
//Place 26 is in 7 cupe!
//Place 1 is in 1 cupe!
//Place 7 is in 2 cupe!
//Place 16 is in 4 cupe!
//Place 33 is in 9 cupe!
//Place 40 is in 8 cupe!
//Place 39 is in 8 cupe!
//Place 50 is in 3 cupe!