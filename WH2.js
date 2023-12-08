//Task 1

const hoursPerDay = 24;
const minutesPerHour = 60;
const secondsPerMinute = 60;

let days = 0;
let hours = 0;
let minutes = 0;
let seconds =0;


days = 7;
hours = days * hoursPerDay;
minutes = hours * minutesPerHour;
seconds = minutes * secondsPerMinute;
console.log(`У ${days} днях - ${hours} годин, ${minutes} хвилин або ${seconds} секунд.`);

days = 25;
hours = days * hoursPerDay;
minutes = hours * minutesPerHour;
seconds = minutes * secondsPerMinute;
console.log(`У ${days} днях - ${hours} годин, ${minutes} хвилин або ${seconds} секунд.`);

//У 7 днях - 168 годин, 10080 [хвилин] або 604800 секунд.
//У 25 днях - 600 годин, 36000 хвилин або 2160000 секунд.

//Task 2

let radius1 = 0;
let radius2 = 0;
let square1 = 0;
let square2 = 0;
let square = 0;

radius1 = 3;
radius2 = 7;
square1 = Math.PI * radius1 ** 2;
square2 = Math.PI * radius2 ** 2;
square = square1 + square2;

console.log(`Сумарна площа двох кіл радиусами ${radius1} та ${radius2} дорівнює ${square}`);

//Сумарна площа двох кіл радиусами 3 та 7 дорівнює 182.2123708


//Task 3

let pizza1 = {radius : 30, cost : 150, square : 0, price : 0};
let pizza2 = {radius : 45, cost : 200, square : 0, price : 0};

pizza1.square = Math.PI * pizza1.radius ** 2;
pizza1.price = pizza1.cost / pizza1.square;

pizza2.square = Math.PI * pizza2.radius ** 2;
pizza2.price = pizza2.cost / pizza2.square;



console.log(`Ціна 1см^2 першої піци = ${pizza1.price}`);
console.log(`Ціна 1см^2 другої піци = ${pizza2.price}`);
console.log(`Перша піца дорожче другої? ${pizza1.price > pizza2.price}`);
console.log(`Друга піца дорожче першої? ${pizza2.price > pizza1.price}`);
console.log('Тобто :');

console.log('Перша піца : ');console.log(pizza1);

let pizza1_2 = {square : pizza1.square * 2, price : pizza1.price, cost : pizza1.cost * 2};
console.log('Дві перши піци - ');console.log(pizza1_2);

console.log('Друга піца : ');console.log(pizza2);

console.log(`Тобто дві піци по ${pizza1.radius}см меньщі по площині чим одна піца ${pizza1.radius}см`);

//Ціна 1см^2 першої піци = 0.05305164769729845
//Ціна 1см^2 другої піци = 0.031438013450250935
//Перша піца дорожче другої? true
//Друга піца дорожче першої? false
//Тобто :
//Перша піца : 
//{
//  radius: 30,
//  cost: 150,
//  square: 2827.4333882308138,
//  price: 0.05305164769729845
//}
//Дві перши піци - 
//{ square: 5654.8667764616275, price: 0.05305164769729845, cost: 300 }
//Друга піца : 
//{
//  radius: 45,
//  cost: 200,
//  square: 6361.725123519331,
//  price: 0.031438013450250935
//}
//Тобто дві піци по 30см меньщі по площині чим одна піца 30см
