export default class CheckModel{
    DB = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSTTGO4D6XJ7HEmzKgxv46gLSTtsT9pRKaQB01GreLJVqc5IYgycthmu27d3_8XgJqj9ThtH1uLUEjX/pub?gid=1913634885&single=true&output=tsv';

    parser(t){
        const rawData = t.split('\r\n').map(line => line.split('\t'));
        const headers = rawData.shift();
        const data  = rawData.map(arr => arr.reduce((acc, el, i) => ({
            ...acc,
            [headers[i]]: el
        }), {}));
        return data;
    }

    async load(){
        return await fetch(this.DB)
            .then(r => r.text()).
            then(this.parser);
    }

    }