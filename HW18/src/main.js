import UI from "./ui.js";

const maxPassLen = 6;
const minCaseCount = [1, 1, 1, 1]; 
const regs = [
{ value: /[A-Z]/g, minCount: 1, message: 'too small count A-Z<br>'},
{ value: /[a-z]/g, minCount: 1, message: 'too small count a-z<br>'},
{ value: /[0-9]/g, minCount: 1, message: 'too small count 0-9<br>'},
{ value: /\W/gi, minCount: 1, message: 'too small count any symbols<br>'}
// a-z
// 0-9
// ! - ←
//: - @
//[ - `
//{ - ~
]

const isInRange = (what, from, to) => {
    return from <= what && what <= to;
}

function validateForm(info = {loginEmail: '', password: ''}){
    let result = '';
    //check email
    const reEmail = /^(.+)@(.+)\.(.+)$/;
    if (!reEmail.test(info.loginEmail))  result += `email is not correct! <br>`;

    //password
    const rePass = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g;
    if (!rePass.test(info.password))  result += `Password are not in rigth standart! <br>`;
    
    
    regs.forEach( el => {
        const res1 = info.password.match(el.value) ?? []; 
        if (res1.length < el.minCount) result += el.message;
    });  
    
    UI.setErrorLog1(result);

    return result === '';
}

function checkLoginPass(){
    if (!validateForm({loginEmail: UI.loginEmail, password: UI.password})){ 
        alert('Wrong loginEmail or password !!!');
    }else{
        alert('All are norm !!!');
    }
}

UI.generateScreen();
UI.setReactonToCheckButton(UI.CheckButton, checkLoginPass);

function processArray(checkArray = [], callback){
    let newArray = Array.from(checkArray);
    let result = {result: true, obj: checkArray, newObj: newArray, errorMessage: '', index: -1};
    let calcres = 0;
    for (let i=0; i < newArray.length; i++){
        try {
            newArray[i] = callback(newArray[i], i, calcres);
            calcres = newArray[i];
        } catch (error) {
            result.result = false;
            result.errorMessage = `ERROR working callback<br>${error}`;
            result.index = i;
            break;
        }
    }
    return result
}

function map1(checkElem, i, pred){
    let result = pred;
    if (typeof(checkElem) === 'string') throw 'Elem is NaN';
    if (typeof(pred) === 'string') throw 'Pred is NaN';
    if (isNaN(checkElem)) throw 'Elem is NaN';
    if (isNaN(pred)) throw 'Pred is NaN';
    if (checkElem >= Number.MAX_SAFE_INTEGER) throw 'ELem is too big';
    if (checkElem <= -Number.MAX_SAFE_INTEGER) throw 'Elem is too small';
    if (checkElem === 0 && i % 4 === 3) throw 'division by zero';

    switch(i % 4){
        case 0: result += checkElem; break;
        case 1: result -= checkElem; break;
        case 2: result *= checkElem; break;
        case 3: result /= checkElem; break;
        default: result = 0;
    }
    return result;
}


function runTest2(){
    UI.setErrorLog2(processArray([1,2,3,4,5,6,7], map1));
    UI.setErrorLog2(processArray([1,2,3,0,5,6,7], map1));
    UI.setErrorLog2(processArray([1,2,3,4,'5',6,7], map1));
    UI.setErrorLog2(processArray([1,2,3,4,5,Number.MAX_SAFE_INTEGER,7], map1));
}

UI.setReactonToCheckButton(UI.CheckButton2, runTest2);
