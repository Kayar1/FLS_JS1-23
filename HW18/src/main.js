import UI from "./ui.js";

const maxPassLen = 6;
const minCaseCount = [1, 1, 1, 1]; 
// A-Z
// a-z
// 0-9
// ! - ←
//: - @
//[ - `
//{ - ~

function validateForm(info = {loginEmail: '', password: ''}){
    let result = '';
    //check email
    if (info.loginEmail.indexOf('@') === 0) result += `There are not '@' in email! <br>`;
    if (info.loginEmail.indexOf('@') !== loginEmail.lastIndexOf('@')) result += `Too many '@' in email! <br>`;
    if (info.loginEmail.substring(info.loginEmail.indexOf('@') + 1).indexOf('.') === 0)  result += `email is not correct! <br>`;

    //password

    if (info.password.length <= maxPassLen) result += `Password are too short (min ${maxPassLen} symbols)! <br>`;
    let caseSymbols = [0, 0, 0, 0];
    for (let i=0; i<info.password.length; i++){
        if (65 <= info.password.charCodeAt(i) && info.password.charCodeAt(i) <= 90) caseSymbols[0]++;
        if (97 <= info.password.charCodeAt(i) && info.password.charCodeAt(i) <= 122) caseSymbols[1]++;
        if (48 <= info.password.charCodeAt(i) && info.password.charCodeAt(i) <= 57) caseSymbols[2]++;
        if (33 <= info.password.charCodeAt(i) && info.password.charCodeAt(i) <= 47) caseSymbols[3]++;
        if (58 <= info.password.charCodeAt(i) && info.password.charCodeAt(i) <= 64) caseSymbols[3]++;
        if (91 <= info.password.charCodeAt(i) && info.password.charCodeAt(i) <= 96) caseSymbols[3]++;
        if (123 <= info.password.charCodeAt(i) && info.password.charCodeAt(i) <= 126) caseSymbols[3]++;
    }
    
    const checkResult = caseSymbols.reduce((a, b, i) => a += b >= minCaseCount[i] ? 1 : 0, 0);
    if (checkResult < minCaseCount.length) result += `Password are not in rigth standart! <br>`;

    UI.setErrorLog1(result);

    return result === '';
}

function checkLoginPass(){
    if (!validateForm(UI.loginEmail, UI.password)){ 
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
