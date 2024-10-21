import './styles/style.css';
import counter from "./views/counter.html?raw";

/**
 * 
 * @param {HTMLDivElement} app 
 */
export const CounterApp = ( app ) => {

    app.innerHTML = counter;

}