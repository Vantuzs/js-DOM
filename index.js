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
    box.style.left = `${clientX - (box.offsetWidth/2)}px`
    box.style.top = `${clientY - (box.offsetHeight/2)}px` 



    if(clientX>475){
        box.style.left = `${449}px`
    }else{
        box.style.left = `${clientX - (box.offsetWidth/2)}px`
    }
    if(clientY>475){
        box.style.top = `${449}px`    
    } else{
    box.style.top = `${clientY - (box.offsetHeight/2)}px` }
    if(clientX<25){
        box.style.left = `${0}px`
    }
    // else{
    //     box.style.left = `${clientX - (box.offsetWiidth/2)}px`
    // }
    if(clientY<25){
        box.style.top = `${0}px`
    }
    // else{
    //     box.style.top = `${clientY - (box.offsetHeoght/2)}px`
    // }
}
    }
    // console.log(clientX)  // console.log(clientY)
