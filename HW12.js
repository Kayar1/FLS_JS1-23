console.log('Task 1-4');

Array.prototype.mypush=function(arg){
    this[this.length]=arg
    return this;
}

Array.prototype.mypop=function(){
    let res=this[this.length-1];
    this.length--;
    return res;
}

Array.prototype.myshift=function(){
    const res=this[0];
    for (let i=0;i<this.length-1;i++){
        this[i]=this[i+1];
    }
    this.length--;
    return res;
}

Array.prototype.myunshift=function(arg){
    for (let i=this.length;i>0;i--){
        this[i]=this[i-1];
    }
    this[0]=arg;
    return this;
}


let ar1=[1,2,3,4,5,6,7,8,9];
console.log('orig ',ar1);
console.log('pop ',ar1.mypop());
console.log('after pop ',ar1);
console.log('push ',ar1.mypush(10));
console.log('agter push ',ar1);
console.log('shift ',ar1.myshift());
console.log('after shift ',ar1);
console.log('unshift ',ar1.myunshift(11));
console.log('after unshift ',ar1);




console.log('Task 5');

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function(nums, target) {
    //const res = nums.reduce((a,b,i)=> a = b>=target&&a===-1 ? i : a,-1);
    //return  res === -1 ? nums.length : res;

    return  nums.reduce((a,b,i,arr)=> a = b >= target && a === -1 ? i : (i === arr.length-1 && a === -1 ? arr.length : a),-1);
};

console.log(searchInsert([1,3,5,6],5));
console.log(searchInsert([1,3,5,6],2));
console.log(searchInsert([1,3,5,6],7));

console.log('Task 6');

/**
 * @param {number[]} digits
 * @return {number[]}
 */

const plusOne = function(digits) {
    //const newdigits = digits.reduce((a, b, i, arr) => a = a + b * Math.pow(10, arr.length - i - 1), 0) + 1;
    //return newdigits.toString().split('').map(el => parseInt(el));

    let i=digits.length-1;
    digits[i]++;
    while (digits[i] === 10&&i>0){
        digits[i] = 0;
        digits[i-1]++; 
        i--;
    }
    if (digits[0]===10){
        digits[0]=0;
        digits.unshift(1);
    }
    return digits;
}

console.log(plusOne([1,2,3]));
console.log(plusOne([4,3,2,1]));
console.log(plusOne([9]));
console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]));