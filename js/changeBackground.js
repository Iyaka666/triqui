/* Cambia el background del elemento al cual se le pase el
 * id utilizando el sistema de color HSL
 */
const $element = document.querySelector("section");
const getRandomNumber = maxNum => {
    //0, 1 y 2 tienen la misma probabilidad de salir
    let result;
    while(true){
        value = Math.trunc(Math.random() * 3);
        if(value === 0){
            result = Math.floor(Math.random() * maxNum);
            break;
        }
        else if(value === 1){
            result = Math.round(Math.random() * maxNum);
            break;
        }
        else if(value === 2){
            result = Math.ceil(Math.random() * maxNum);
            break;
        }else
            continue;
    }
    return result;
};

const getRandomColor = () => {
    const h = getRandomNumber(360);
    const s = getRandomNumber(100);
    const l = getRandomNumber(100);
    
    return `hsl(${h}deg, ${s}%, ${l}%)`;
};

const setBackgroundColor = () => {
    const randomColor = getRandomColor();
    section.style.backgroundColor = randomColor;
    section.style.color = randomColor;
};
setInterval(() => {setBackgroundColor()}, 3000);