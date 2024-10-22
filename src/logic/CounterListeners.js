import { CounterDecrease, CounterIncrease } from "./Counter";

/**
 * 
 * @param {HTMLButtonElement} btn 
 * @param {HTMLParagraphElement} numberHtml 
*/
export const increaseListener = ( btn, numberHtml, counterStore ) => {
    
    
    btn.addEventListener('click', () => {
        counterStore = CounterIncrease(counterStore);
        numberHtml.innerText = counterStore;

    });

    return counterStore; 
}

/**
 * 
 * @param {HTMLButtonElement} btn 
 * @param {HTMLParagraphElement} numberHtml 
*/
export const decreaseListener = ( btn, numberHtml, counterStore) => {
    
    
    btn.addEventListener('click', () => {
        counterStore = CounterDecrease(counterStore);
        numberHtml.innerText = counterStore; 
    });

    return counterStore; 

}

/**
 * 
 * @param {HTMLButtonElement} btn
*/
export const resetListener = ( btn, numberHtml, counterStore ) => {
    btn.addEventListener('click', () => {
        counterStore = 0;
        numberHtml.innerText = counterStore; 
    });
}
