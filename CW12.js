/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
const numberOfEmployeesWhoMetTarget = function(hours, target) {
    return hours.reduce((a,b) => a = (b >= target ? a + 1 : 0), 0);
};


console.log(numberOfEmployeesWhoMetTarget([0,1,2,3,4],2));
console.log(numberOfEmployeesWhoMetTarget([5,1,4,2,2],6));
console.log(numberOfEmployeesWhoMetTarget([15,43,21],29));

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    const res=[nums[0]];
    nums.reduce((a, b)=> {a = a + b; res.push(a); return a});
    return res;
};

console.log(runningSum([1,2,3,4]));
console.log(runningSum([1,1,1,1,1]));
console.log(runningSum([3,1,2,10,1]));