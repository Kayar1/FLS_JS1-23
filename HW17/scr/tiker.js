import UI from "./ui.js"

export default class Tiker{
    #listeners = {};
    #maxID = 0;
    #currentDay = 0;
    #id;
    #maxTiker = 50; 
    events = {
        'NEXT_DAY' : 'NEXT_DAY',
        'TODO' : 'TODO',
    };

    set id(value){
        this.#id = value;
    }

    subscribe(event, callback, startDay, params){
        if(!this.#listeners[event]){
            this.#listeners[event] = [];
        }
        this.#maxID++;
        this.#listeners[event].push({id: this.#maxID, callback: callback, startDay: startDay, params: params});        
        return this.#maxID;
    }
    
    unsubscribe(event, id){        
        if(!this.#listeners[event]){
            this.#listeners[event] = [];
        }
        this.#listeners[event] = this.#listeners[event].filter(cb => !(cb.id === id));
    }
    
    notify(event, data){
        if(!this.#listeners[event]){
            this.#listeners[event] = [];
        }
        if (event === this.events.TODO){
            this.#listeners[event].forEach((el, i) => {
                if (el.startDay === this.#currentDay) {
                    UI.addStatusInfo(el.callback(...el.params, data));
                    this.unsubscribe(event, el.id);
                }           
            });
        }else{
            this.#listeners[event].forEach((el, i) => UI.addStatusInfo(el.callback(...el.params, data)));
            this.#currentDay++;        
        }
        if (this.#currentDay === this.#maxTiker) clearInterval(this.#id);
        return this.#currentDay;
    }
}