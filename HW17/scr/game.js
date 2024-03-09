export default class Game{
    static Genres = {
        'shuter' : 'shuter', 
        'spacelight' : 'spacelight', 
        'arcade' : 'arcade', 
        'racing' : 'racing'
    };

    constructor({name = '', genre = Game.shuter, issue = 2000, complexity = 0}){
        this.name = name;
        this.genre = genre;
        this.issue = issue;
        this._complexity = complexity; // % сложность вычитается из процента выполнения
    }

    get complexity(){
        return this._complexity;
    }

    set comlexity(value){
        this._complexity = value;
    }
    
    print(){
        let result =`<b>Game's info:</b><br>
        `;        
        for (let key in this){
            if (typeof(this[key]) != 'function') result += `Game.${key} = ${this[key]}<br>`;
        }
        return result;
    }
}