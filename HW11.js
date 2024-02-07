console.log('Task 1 - 4');

Array.prototype.myFind = function(callback){
    for (let i=0;i<this.length;i++){
        if (callback(this[i], i, this)) return this[i];
    }
    return undefined;
}

Array.prototype.myFindIndex = function(callback){
    for (let i=0;i<this.length;i++){
        if (callback(this[i], i, this)) return i;
    }
    return -1;
}

Array.prototype.myFindLast = function(callback){
    for (let i=this.length - 1;i>=0;i--){
        if (callback(this[i], i, this)) return this[i];
    }
    return undefined;
}

Array.prototype.myEvery = function(callback){
    for (let i=0;i<this.length;i++){
        if (!callback(this[i], i, this)) return false;
    }
    return true;
}

console.log('find ',[1,2,3,4,5,6,7,8,9,0].find(n => n > 5));
console.log('myFind ',[1,2,3,4,5,6,7,8,9,0].myFind(n => n > 5));

console.log('findIndex ',[1,2,3,4,5,6,7,8,9,0].findIndex(n => n > 5));
console.log('myFindIndex ',[1,2,3,4,5,6,7,8,9,0].myFindIndex(n => n > 5));

console.log('findLast ',[1,2,3,4,5,6,7,8,9,0].findLast(n => n > 5));
console.log('myFindLast ',[1,2,3,4,5,6,7,8,9,0].myFindLast(n => n > 5));

console.log('every -f ',[1,2,3,4,5,6,7,8,9,0].every(n => n > 5));
console.log('myEvery -f ',[1,2,3,4,5,6,7,8,9,0].myEvery(n => n > 5));

console.log('every -t ',[1,2,3,4,5,6,7,8,9,0].every(n => n > -1));
console.log('myEvery -t ',[1,2,3,4,5,6,7,8,9,0].myEvery(n => n > -1));


console.log('Task 5');

Array.prototype.myFilterIndex = function(callback){
    const res=[];
    for (let i=0;i<this.length;i++){
        if (callback(this[i], i, this)) res.push(i);
    }
    return res;
}

String.prototype.myIsPresent = function(ch = ''){
    for (let i=0;i<this.length;i++){
        if (this.slice(i,i+ch.length)===ch) return true;
    }
    return false;
}
/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
const findWordsContaining = function(words, x) {
    return words.myFilterIndex(el => el.myIsPresent(x)); 
};

console.log(findWordsContaining(["leet","code"],"e"));
console.log(findWordsContaining(["abc","bcd","aaaa","cbc"],"a"));
console.log(findWordsContaining(["abc","bcd","aaaa","cbc"],"z"));
