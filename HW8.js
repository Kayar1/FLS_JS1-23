 
console.log('Task1');

const myAt = (str = '', index = 0) => str.slice(index)[0];

console.log(myAt("hello", 0)); // повертає "h"
console.log(myAt("hello", 4)); // повертає "o"
console.log(myAt("hello", 5)); // повертає undefined
console.log(myAt("hello", -1)); // повертає o



console.log('Task2');

 
const myConcat = function(){
    return Array.from(arguments).join('');
}

 console.log(myConcat("hello", " ", "world")); // повертає "hello world"
 console.log(myConcat("a", "b", "c", "d")); // повертає "abcd"
 console.log(myConcat("")); // повертає ""

 console.log('Task3');
const myRepeat = (str, count) => count ===0 ? '': str + myRepeat(str,count - 1);

 console.log(myRepeat("abc", 3));// повертає "abcabcabc"
 console.log(myRepeat("x", 0)); // повертає ""


 console.log('Task4');

const calcWordLength = (str) => {
    let minlen=str.length;
    str.split(' ').forEach(elem => minlen = elem.length < minlen ? elem.length : minlen);
    return minlen;
}

console.log(calcWordLength("bitcoin take over the world maybe who knows perhaps")); //  --> 3
console.log(calcWordLength("turns out random test cases are easier than writing out basic ones")); //  --> 3
console.log(calcWordLength("lets talk about javascript the best language")); //  --> 3
console.log(calcWordLength("i want to travel the world writing code one day")); //  --> 1
console.log(calcWordLength("Lets all go on holiday somewhere very cold")); //  --> 2

console.log('Task5');

/**
 * @param {string} sentence
 * @return {boolean}
 */
const checkIfPangram = function(sentence) {
    if (sentence.length<26) return false;
    let count = 0;
    for (i=97;i<=122;i++){
        if (sentence.indexOf(String.fromCharCode(i))>=0) count++;
    }
    return count === 26;
    /*
    let allChars = new Set([...sentence]);
    return allChars.size === 26;
    */
};

console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydog"));
console.log(checkIfPangram("leetcode"));
    
console.log('Task6');
/**
 * @param {string} word
 * @return {boolean}
 */
const equalFrequency = function(word='') {
    let allChars = new Set([...word.split('').sort().join('')]);
    return Math.abs(allChars.size - word.length) <= 1;
};

console.log(equalFrequency("abcc"));
console.log(equalFrequency("aazz"));  
console.log(equalFrequency("bac")); 
console.log(equalFrequency("cccaa"));  

console.log('Task7');
/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
const decodeMessage = function(key, message) {
    let allKey = new Set([...key.replaceAll(' ','')]);  
    let res = message;
    for (i=0;i<res.length;i++){
        j=0;
        for (elem of allKey){
            if (elem === res[i]){
                res = res.slice(0,i) + String.fromCharCode(j+97) + res.slice(i + 1);    
                break;
            }    
            j++;
        }       
    }
    return res;
};

console.log(decodeMessage("the quick brown fox jumps over the lazy dog","vkbs bs t suepuv"));
console.log(decodeMessage("eljuxhpwnyrdgtqkviszcfmabo","zwx hnfx lqantp mnoeius ycgk vcnjrdb"));
