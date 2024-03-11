function calc(a, b, op) {
    console.log(`a = ${a}, b = ${b}, op = ${op}`);
    let result = 0;

    if (arguments.length < 3) throw 'too small number of arguments';
    if (isNaN(arguments[0])) throw 'first argument NaN';
    if (isNaN(arguments[1])) throw 'second argument NaN';
    if (arguments[0] >= Number.MAX_SAFE_INTEGER) throw 'first argument is too big';
    if (arguments[0] <= -Number.MAX_SAFE_INTEGER) throw 'first argument is too small';
    if (arguments[1] >= Number.MAX_SAFE_INTEGER) throw 'second argument is too big';
    if (arguments[1] <= -Number.MAX_SAFE_INTEGER) throw 'second argument is too small';
    if (typeof (arguments[2]) !== 'string') throw 'third argument not string';
    if (arguments[2].length !== 1) throw 'third argument wrong length';

    switch (op) {
        case '+': result = a + b; break;
        case '-': result = a - b; break;
        case '/':
            if (b === 0) {
                throw 'devision by zero'
            } else {
                result = a / b;
            }
            break;
        case '*': result = a * b; break;
        default: throw 'wrong operator'; break;
    }

    return result;
};

//Огорнути виклик функції в Try/catch та модифікувати функцію, щоб генерувались помилки
//недостатньо аргументів
//неправильний тип аргументів
//ділення на нуль
//операції з безкінечністю не можливі
//недійсна операція (окрім +-/*)


try {
    console.log(calc(4, 5, '+'));
}
catch (error) {
    console.log('ERROR');
    console.log(error);
}
try {
    console.log(calc(40, 50, '-'));
}
catch (error) {
    console.log('ERROR');
    console.log(error);
}
try {
    console.log(calc(4, 2, '/'));
}
catch (error) {
    console.log('ERROR');
    console.log(error);
}
try {
    console.log(calc(4, 5, '*'));
}
catch (error) {
    console.log('ERROR');
    console.log(error);
}
try {
    console.log(calc(4, '3', '+'));
}
catch (error) {
    console.log('ERROR');
    console.log(error);
}
try {
    console.log(calc(40, '-'));
}
catch (error) {
    console.log('ERROR');
    console.log(error);
}
try {
    console.log(calc(4, 0, '/'));
}
catch (error) {
    console.log('ERROR');
    console.log(error);
}
try {
    console.log(calc(4, 5, '6'));
}
catch (error) {
    console.log('ERROR');
    console.log(error);
}
