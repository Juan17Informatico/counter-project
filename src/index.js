import { CounterBtn } from './logic/CounterBtn';
import { decreaseListener, increaseListener, resetListener } from './logic/CounterListeners';
import './styles/style.css';
import counter from "./views/counter.html?raw";

let counterStore = 0; 

const btnInfo = [
    {
        id: 'increase',
        className: 'btn btn-increase',
        title: 'Increase'
    },
    {
        id: 'decrease',
        className: 'btn btn-decrease',
        title: 'Decrease'
    },
    {
        id: 'reset',
        className: 'btn btn-reset',
        title: 'Reset'
    },
];

/**
 * 
 * @param {HTMLDivElement} app 
 */
export const CounterAppMain = ( app ) => {

    app.innerHTML = counter;

    let btns = {};
    const counterBtnContainer = document.getElementById('counter-btn'); 
    const counterP = document.getElementsByClassName('counter-p');
    
    btnInfo.forEach(btnInfo => {
        btns[`btn${btnInfo.title}`] = CounterBtn(btnInfo); 
        
        counterBtnContainer.append(btns[`btn${btnInfo.title}`]);
    });
    
    console.log(counterP[0]);
    
    counterP[0].innerText = counterStore;
    
    counterStore = increaseListener(btns['btnIncrease'], counterP[0], counterStore);
    counterStore = decreaseListener(btns['btnDecrease'], counterP[0], counterStore);
    counterStore = resetListener(btns['btnReset'], counterP[0], counterStore);

}