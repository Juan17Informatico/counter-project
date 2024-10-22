
/**
 * CounterBtn
 * @param {idHTMLElement, classHTMLElement, titleElement} param
 * @returns HTMLBtnElement
 */
export const CounterBtn = ({ id = "", className = "", title }) => {

    const btn = document.createElement("button");

    btn.innerText = title;
    btn.setAttribute("id", id);
    btn.setAttribute("class", className);

    return btn;

}