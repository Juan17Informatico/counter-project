import { CounterDecrease, CounterIncrease } from "./Counter";
import { CounterBtn } from "./CounterBtn"

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

let counterStore = 0; 

/**
 * 
 */
export const CounterApp = () => {
    
    // const increaseBtn = CounterBtn(btnInfo[0]);
    let btns = {};
    const counterBtnContainer = document.getElementById('counter-btn'); 
    const counterP = document.getElementsByClassName('counter-p');
    
    btnInfo.forEach(btnInfo => {
        btns[`btn${btnInfo.title}`] = CounterBtn(btnInfo); 
        
        counterBtnContainer.append(btns[`btn${btnInfo.title}`]);
    });
    
    console.log(counterP[0]);
    
    counterP[0].innerText = counterStore;
    
    increaseListener(btns['btnIncrease'], counterP[0]);
    decreaseListener(btns['btnDecrease'], counterP[0]);
    resetListener(btns['btnReset'], counterP[0]);
    
}
/**
 * 
 * @param {HTMLButtonElement} btn 
 * @param {HTMLParagraphElement} numberHtml 
 */
const increaseListener = ( btn, numberHtml ) => {
    btn.addEventListener('click', () => {
        counterStore = CounterIncrease(counterStore);
        numberHtml.innerText = counterStore; 
    });
}

/**
 * 
 * @param {HTMLButtonElement} btn 
 * @param {HTMLParagraphElement} numberHtml 
 */
const decreaseListener = ( btn, numberHtml ) => {
    btn.addEventListener('click', () => {
        counterStore = CounterDecrease(counterStore);
        numberHtml.innerText = counterStore; 
    });
}

/**
 * 
 * @param {HTMLButtonElement} btn
 */
const resetListener = ( btn, numberHtml ) => {
    btn.addEventListener('click', () => {
        counterStore = 0;
        numberHtml.innerText = counterStore; 
    });
}