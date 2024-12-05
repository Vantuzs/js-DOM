/*

Дан section, на якій треба клацати мишею
Дан div, який має переміститись на точку, в яку клацнули мишею

*/


const field = document.querySelector('#game-field');
const box = document.querySelector('#box');

field.addEventListener('click',clickHandler,{capture: true});

function clickHandler(event/*{clientX,clientY,target: {children: {box}}}*/){
    // const {children: {box}}= target;
    // console.dir(box);

    event.stopPropagation()
    if(event.currentTarget === event.target){
    const {clientX,clientY,target: {children:{box}}}= event
    box.style.left = `${event.clientX}px`
    box.style.top = `${event.clientY}px`}
    // console.log(clientX);
    // console.log(clientY);
}