export default class MyObserver{
    #listeners={};
    events = {
        'NewTime' : 'изменение времени',
        'CloseAudio' : 'остановка звука'
    }
    subscibe(event, callback){
        if (!this.#listeners[event]){
            this.#listeners[event]=[];
        }
        this.#listeners[event].push(callback);
    }
    unsubscibe(event, callback){
        if (!this.#listeners[event]){
            this.#listeners[event]=[];
        }
        this.#listeners[event]=this.#listeners[event].filter(cb => cb !== callback);
    }
    notify = (event, h, m, s)=>{
        if (!this.#listeners[event]){
            this.#listeners[event]=[];
        }
        this.#listeners[event].forEach(callback => callback(h, m, s));
    }
}