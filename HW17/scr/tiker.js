import UI from "./ui.js"

export default class Tiker{
    #listeners = {};
    events = {
        'NEXT_DAY' : 'NEXT_DAY',
    };

    subscribe(event, callback){
        if(!this.#listeners[event]){
            this.#listeners[event] = [];
        }
        this.#listeners[event].push(callback);
    }
    
    unsubscribe(event, callback){        
        if(!this.#listeners[event]){
            this.#listeners[event] = [];
        }
        this.#listeners[event] = this.#listeners[event].filter(cb => cb !== callback);
    }
    
    notify(event, data){
        if(!this.#listeners[event]){
            this.#listeners[event] = [];
        }
        this.#listeners[event].forEach((callback, i) => UI.addStatusInfo(callback(data)));
    }
}