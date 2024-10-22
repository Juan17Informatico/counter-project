import { CounterApp } from './logic';
import './styles/style.css';
import counter from "./views/counter.html?raw";

/**
 * 
 * @param {HTMLDivElement} app 
 */
export const CounterAppMain = ( app ) => {

    app.innerHTML = counter;

    CounterApp();

}