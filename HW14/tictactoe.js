console.log('Task 1');

class User {
    id;

    constructor(symb, value) {
        this.symbol = symb;
        this.value = value;
    }

    step = (board) => {
        let x = 0;
        let y = 0;
        let count = 1000;

        while (board.board[x][y] !== 0 && count > 0) {
            x = Math.floor(Math.random() * 3);
            y = Math.floor(Math.random() * 3);
            count--;
        }

        if (board.board[x][y] === 0) board.board[x][y] = this.value;
    }
}

class Board {
    id;
    constructor() {
        this.board = [];
        for (let i = 0; i < 3; i++) {
            this.board[i] = [0, 0, 0];
        }
    }
    showBoard(user) {
        console.log(`Board after step ${user.symbol} = ${user.value} :`);
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

const stepOfUser = function(user, board){
    if (result === -1) {
        user.step(board);
        board.showBoard(user);
    }    
}

const userX = new User('X', 1);
const userO = new User('O', 2);
const myBoard = new Board();
let result = -1;

userX.id = setInterval(() => {
    stepOfUser(userX, myBoard);
}, 2000);

setTimeout(()=> {
    userO.id = setInterval(() => {
        stepOfUser(userO, myBoard);
    }, 2000);
    
}, 1000);

setTimeout(()=> {
    myBoard.id = setInterval(() => {
        result = myBoard.checkBoard();
        if (result !== -1){
            clearInterval(userX.id);
            clearInterval(userO.id);
            clearInterval(myBoard.id);

            console.log('0 - no wins / 1 - win X / 2 - Win O');
            console.log(`Result = ${result}`);
            switch (result){
                case 1: console.log('WIN X !!!');break;
                case 2: console.log('WIN O !!!');break;
                default: console.log('No Wins');break;
            }
        }
    }, 1000);    
}, 500);



