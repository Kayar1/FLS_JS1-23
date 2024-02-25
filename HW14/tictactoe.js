console.log('Task 1');

class User{
    constructor(symb){
        this.symbol = symb;
    }

    step = (board) => {
        let x = 0;
        let y = 0;
        let count = 1000;

        while (board.board[x][y] !== 0 && count > 0){
            x = Math.floor(Math.random() * 3);
            y = Math.floor(Math.random() * 3);
            count--;
        }

        if (board.board[x][y] === 0) board.board[x][y] = this.symbol;        
    }
}

class Board{
    constructor(){
        this.board = [];
        for (let i = 0; i < 3; i++) {
            this.board[i] = [0, 0, 0];
        }
    }
    showBoard() {
        console.log(`Board :`);
        for (let i = 0; i < 3; i++) {
            console.log(this.board[i]);
        }
    }
    checkBoard() {
        const temp = Array.from(this.board.map(el => el.map(el1 => el1 === 2 ? 10 : el1)));
        const summ = [];
        summ[0] = temp[0][0] + temp[0][1] + temp[0][2];
        summ[1] = temp[1][0] + temp[1][1] + temp[1][2];
        summ[2] = temp[2][0] + temp[2][1] + temp[2][2];
        summ[3] = temp[0][0] + temp[1][0] + temp[2][0];
        summ[4] = temp[0][1] + temp[1][1] + temp[2][1];
        summ[5] = temp[0][2] + temp[1][2] + temp[2][2];
        summ[6] = temp[0][0] + temp[1][1] + temp[2][2];
        summ[7] = temp[2][0] + temp[1][1] + temp[0][2];
        let res = 0;
        if (this.board.some(el => el.some(el1 => el1 === 0))) res = -1;
        if (summ.some(el => el === 3)) res = 1;
        if (summ.some(el => el === 30)) res = 2;
        return res;
    }
}

const userX = new User(1);
const userO = new User(2);
const myBoard = new Board();

let step = 0;
let result = myBoard.checkBoard(); 
while (result === -1){
    if (step === 0){
        userX.step(myBoard);
    } else{
        userO.step(myBoard);
    } 
    myBoard.showBoard();
    step = 1 - step;
    result = myBoard.checkBoard();
}
console.log(`Result = ${result}`);
console.log('0 - no wins / 1 - win X / Win O');

