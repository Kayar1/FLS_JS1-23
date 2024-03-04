import RandomBeast from './random_beast.js';

function onBodyClick(ev){
    new RandomBeast(ev);
}

document.querySelector('body').addEventListener('click', onBodyClick);