console.log('TASK 1');

const getNames = function () {
    const res = [];
    const maxLen = 12;
    const minLen = 4;
    const firstLitera = 'a'.charCodeAt(0);
    const literaCount = 26;
    const maxValues = 50;
    for (let j = 0; j < maxValues; j++) {
        let tempName = '';
        for (let i = 1; i < Math.floor(Math.random() * maxLen) + minLen; i++) {
            const nextLitera = Math.floor(Math.random() * literaCount) + firstLitera - 1;
            if (i === 1) tempName += String.fromCharCode(nextLitera).toUpperCase()
            else tempName += String.fromCharCode(nextLitera);
        }
        res.push(tempName);
    }

    return res;
}

const maleNames = getNames();
const femaleNames = getNames();

const getObject = function(gend = 'male'){
    const maxAge = 90;
    const res = {name:'', age : 0, gender: gend};
    res.name = gend === 'female' ? femaleNames[Math.floor(Math.random() * femaleNames.length)] : maleNames[Math.floor(Math.random() * maleNames.length)];
    res.age = Math.floor(Math.random() * maxAge );
    return res;
}


//console.log(maleNames);
//console.log(femaleNames);
console.log(getObject('male'));
console.log(getObject('male'));
console.log(getObject('male'));
console.log(getObject('male'));
console.log(getObject('male'));
console.log(getObject('female'));
console.log(getObject('female'));
console.log(getObject('female'));
console.log(getObject('female'));
console.log(getObject('female'));



console.log('TASK 2');


/**
 * @param {number[]} nums
 * @return {number[]}
 */
const getConcatenation = function(nums) {
    /*
    const res = [];
    for (let i=0;i<2;i++){
        for(let j=0;j<nums.length;j++){
            res.push(nums[j]);
        }
    }
    return res;
    */
    nums.length = nums.length * 2; 
    nums.copyWithin(nums.length/2, 0, nums.length/2);  
    return nums;  
  };

  console.log(getConcatenation([1,2,3]));
  console.log(getConcatenation([1,3,2,1]));


  console.log('TASK 3');

  const fioBeguniv = getNames();

  const getResults = function(fioBeguniv, resCount){
    const res=[];
    const maxTime = 60;
    for (let i=0;i<resCount;i++){
        res.push({fio:fioBeguniv[Math.floor(Math.random() * fioBeguniv.length)], res1: (Math.random() * maxTime + 1).toFixed(2), res2: (Math.random() * maxTime + 1).toFixed(2), res3: (Math.random() * maxTime + 1).toFixed(2)});
    }
    return res;
  }

  const get12 = function(values = []){
    const res = [];
    console.log(values);
    res[0] = values.reduce((a, b) => a.res1 + a.res2 + a.res3 < b.res1 + b.res2 + b.res3 ? a : b).fio;
    res[1] = values.reduce((a, b) => a.res1 + a.res2 + a.res3 > b.res1 + b.res2 + b.res3 ? a : b).fio;
    return res;
  }

  console.log(get12(getResults(fioBeguniv, 6)));

  
  console.log('TASK 4');

  /**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
const kidsWithCandies = function(candies, extraCandies) {
    const res = [];
    const maxCandies = candies.reduce((a, b) => a > b ? a : b);
    candies.forEach(el => res.push(el + extraCandies >= maxCandies));
    return res;
};

console.log(kidsWithCandies([2,3,5,1,3], 3));
console.log(kidsWithCandies([4,2,1,1,2], 1));
console.log(kidsWithCandies([12,1,12], 10));


console.log('TASK 5');

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function(nums){
    let maxI = nums.length;
    let i=0;
    while(i<maxI){
        if (nums[i] === 0){
            nums.push(nums[i]);
            nums.splice(i, 1);
            maxI--;
        }else i++;
    }
};


const n1=[0,1,0,3,12];
moveZeroes(n1)
console.log(n1);
const n2=[0];
moveZeroes(n2)
console.log(n2);


