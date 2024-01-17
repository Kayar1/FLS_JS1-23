//Task 1

function sumTo1(arg) {
    let res = 0;
    for (i = 0; i <= arg; i++) {
        res += i;
    }
    return res;
}

function sumTo2(arg) {
    if (arg === 0) {
        return 1;
    } else {
        return arg + sumTo3(arg - 1);
    }
}

function sumTo3(arg) {
    return (1 + arg) * arg / 2;
}

console.log(sumTo1(4));
console.log(sumTo2(4));
console.log(sumTo3(4));

//Task 2
function fib(arg) {
    let last1 = 1;
    let last2 = 1;
    let res = 0;
    switch (arg) {
        case 0: res = 1; break;
        case 1: res = 1; break;
        default:
            for (i = 3; i <= arg; i++) {
                res = last1 + last2;
                last1 = last2;
                last2 = res;
            }
    }
    return res;
}


console.log(fib(2));
console.log(fib(7));
console.log(fib(77));

//Task 3

function min1(arg1, arg2) {
    return arg1 < arg2 ? arg1 : arg2;
}

console.log(min1(2, 5));
console.log(min1(3, -1));
console.log(min1(1, 1));


//Task 4

function pow1(arg1, arg2) {
    let res = arg1;
    if (arg2 >= 1) {
        for (i = 2; i <= arg2; i++) {
            res *= arg1;
        }
    } else {
        res = 0;
    }
    return res;
}

console.log(pow1(3, 2));
console.log(pow1(3, 3));
console.log(pow1(1, 100));


//Таск 5

function sum4(a) {

    let res = a;
  
    function sum5(b) {
      res += b;
      return res;
    }
  
    return sum5;
  }

  console.log(sum4(1)(2));
  console.log(sum4(5)(-1));


