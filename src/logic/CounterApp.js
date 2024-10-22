import { CounterDecrease, CounterIncrease } from "./Counter";
import { CounterBtn } from "./CounterBtn"



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
    
    increaseListener(btns['btnIncrease'], counterP[0], counterStore);
    decreaseListener(btns['btnDecrease'], counterP[0], counterStore);
    resetListener(btns['btnReset'], counterP[0], counterStore);
    
}
