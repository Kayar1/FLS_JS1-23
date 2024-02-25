console.log('Task 2');

function showArray(arr, order) {
    console.log(`Rooms :`);
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
    console.log(`Order ${order}`);
}

function meeting(rooms, order) {
    if (order === 0) return 'Game On';
    const temp = [];
    let needed = order;
    for (let i = 0; i < rooms.length; i++) {
        temp[i] = 0;
        if (rooms[i][0].length < rooms[i][1]) {
            temp[i] = rooms[i][1] - rooms[i][0].length;
            needed -= temp[i];
            if (needed < 0) temp[i] += needed;
        }
        if (needed <= 0) break;
    }
    if (temp[-1] === 0) temp.pop();
    const res = Array.from(temp);
    if (temp.reduce((a, b) => a += b) === 0 | needed > 0) return 'Not enough';
    return res;
}

console.log('ETALON');

console.log(meeting([['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9]], 4));
console.log(meeting([['XXX', 1], ['XXXXXX', 6], ['X', 2], ['XXXXXX', 8], ['X', 3], ['XXX', 1]], 5));
console.log(meeting([['XX', 2], ['XXXX', 6], ['XXXXX', 4]], 0));

console.log('Other Tests');
const results = [];
const maxRooms = 10;
const maxOrder = 8;
for (let k = 0; k < 50; k++) {
    console.log(`Order # ${k}`);
    let myRooms = [];
    const roomCount = Math.floor(Math.random() * maxRooms + 1);
    for (let i = 0; i <= roomCount; i++) {
        myRooms[i] = [''.padEnd(Math.floor(Math.random() * 10 + 1), 'X'), Math.floor(Math.random() * 10)];
    }
    const myOrder = Math.floor(Math.random() * maxOrder);
    showArray(myRooms, myOrder);
    results[k] = meeting(myRooms, myOrder);
    console.log(`Result = ${results[k]}`);
}