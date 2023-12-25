
//Task 1
{
    function calc(par1 = 0, par2 = 0, action = '+') {
        let res = 0;
        switch (action) {
            case '+': res = par1 + par2; break;
            case '-': res = par1 - par2; break;
            case '/': res = par1 / par2; break;
            case '*': res = par1 * par2; break;
            default: res = par1 + par2; break;
        }

        return res;
    }

    console.log(calc(12, 4, '+'));
    console.log(calc(1, 4, '-'));
    console.log(calc(12, 5, '/', 1).toFixed(1));
    console.log(calc(1.2, 3, '*', 1).toFixed(1));

}

// Task 2

{
    function convertCtoF(c = 0) {
        const res = c * 9 / 5 + 32;

        return res;
    }

    function convertFtoC(f = 0) {
        const res = (f - 32) / (9 / 5);

        return res;
    }

    console.log(convertCtoF(36));
    console.log(convertFtoC(96.8));
}

//Task 3
{
    function convertRGBtoHEX(r = 0, g = 0, b = 0) {
        const res = `RGB (${r}, ${g}, ${b}) = HEX #` +
            `${r.toString(16).padStart(2, '0')}` +
            `${g.toString(16).padStart(2, '0')}` +
            `${b.toString(16).padStart(2, '0')}`;
        return res;
    }

    function convertHEXtoRGB(hex = 0x00) {
        let str = '';
        let temp = 0;

        if (hex > 0) {
            str = hex.toString(16).padStart(6, '0');
            temp = hex;
        } else {
            str = hex;
            temp = parseInt(hex.split('#')[1], 16);
        }
        const r = (temp >> 16) & 255;
        const g = (temp >> 8) & 255;
        const b = temp & 255;
        return `HEX ${str} = RGB(${r}, ${g}, ${b})`;
    }

    console.log(convertRGBtoHEX(17, 34, 51));
    console.log(convertRGBtoHEX(243, 228, 160));
    console.log(convertRGBtoHEX(1, 1, 1));

    console.log(convertHEXtoRGB(0x010101));
    console.log(convertHEXtoRGB(0xf3e4a0));
    console.log(convertHEXtoRGB(0x112233));
    console.log(convertHEXtoRGB('#112233'));

}

//Tasks 4

{

    function DNA(base = '') {
        const getDNA = cell => {
            let res = '';
            switch (cell) {
                case 'A': res = 'T'; break;
                case 'T': res = 'A'; break;
                case 'C': res = 'G'; break;
                case 'G': res = 'C'; break;
                default: res = '';
            }

            return res;
        }

        let res = '';

        for (i = 0; i < base.length; i++) {
            res += getDNA(base[i]);
        }
        return res;
    }

    console.log(DNA('ATTGC'));
    console.log(DNA('GTAT'));
}


//Task Alfa


{
    const minLineCountToPay = 100;
    const minLineCountMoney = 50;
    const minTimeOutForMinus = 3;
    const minTimeOutMoney = 20;
    const maxVariant = 500;

    const plusMoney = (newLineCount = 0) => (newLineCount % minLineCountToPay) === 0  ? minLineCountMoney : 0;
    const getMinus = (timeCount = 0) =>  Math.trunc(timeCount / minTimeOutForMinus) * minTimeOutMoney;
    const getOutVariant = () => (Math.floor(Math.random() * maxVariant) % minLineCountToPay) === 0 ? 1 : 0;
    const getLineCount = (newMoney = 0) =>  Math.trunc(newMoney / minLineCountMoney * minLineCountToPay);
    const getOutCount = (outMoney = 0) =>  Math.trunc(outMoney / minTimeOutMoney * minTimeOutForMinus);

    let moneyPlus = 0;
    let moneyMinus = 0;
    let timeOut = 0;

    /*
    for (let lineCount = 0; lineCount < 10000; lineCount++){
        moneyPlus += plusMoney(lineCount);        
        timeOut += getOutVariant();
        moneyMinus = getMinus(timeOut);
        console.log(`Line ${lineCount.toString().padStart(10,' ')}, MoneyPlus = ${moneyPlus.toString().padStart(10,' ')}, OutCount ${timeOut.toString().padStart(10,' ')}, MoneyMinus = ${moneyMinus.toString().padStart(10,' ')}, , MoneyResult = ${(moneyPlus - moneyMinus).toString().padStart(10,' ')}`); 
    }
    */

    //know money and out, line - ?

    const Money1 = 2000;
    const outCount1 = 11;

    const outMoney1 = getMinus(outCount1);
    const lineMoney1 = Money1 - outMoney1;
    const lineCount1 = getLineCount(lineMoney1);

    console.log(`Money = ${Money1}, outCount =${outCount1}, outMoney = ${outMoney1}, lineMoney = ${lineMoney1}, lineCount = ${lineCount1}`);

    const lineCount2 = 15000;
    const Money2 = 6000;

    const moneyMAX2 = plusMoney(lineCount2);
    const outMoney2 = moneyMAX2 - Money2;
    const outCount2 = getOutCount(outMoney2);      
    
    console.log(`Money = ${Money2}, outCount =${outCount2}, outMoney = ${outMoney2}, lineMoney = ${moneyMAX2}, lineCount = ${lineCount2}`);

    const lineCount3 = 6250;
    const outCount3 = 22;
    
    const lineMoney3 = plusMoney(lineCount3);
    const outMoney3 = getMinus(outCount3);
    const Money3 = lineCount3 - outMoney3;

    console.log(`Money = ${Money3}, outCount =${outCount3}, outMoney = ${outMoney3}, lineMoney = ${lineMoney3}, lineCount = ${lineCount3}`);


}

//Task Bravo

{
    const isHappyTicket = (num = 100000) => {
        let firstP = 0;
        let secondP = 1;
        if (num >= 100000 & num <= 999999) {
            secondP = 0;
            let n = num;
            for (let i = 6; i > 0; i--) {
                const temp = n % 10;
                n = ~~(n / 10);
                i > 3 ? secondP += temp : firstP += temp;
            }
        }

        return firstP === secondP;
    }

function getInfo(num){
    console.log(`${num} - ${isHappyTicket(num)}`);
}

    getInfo(123321);
    getInfo(111111);
    getInfo(547263);
    getInfo(254);
    getInfo(25343456);

}