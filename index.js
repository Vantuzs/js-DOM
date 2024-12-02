/* 

1. Имеем div
2. Имеет две кнопки: на одной написано "Сделать красным", на другой "Сделать зелёным"

3. При нажимании на кнопку, фоновый цвет div с п.1 должен измениться на определённый цвет указаный на кнопке

*/


const div = document.querySelector('#box');
console.log(div.classList);
div.classList.remove('bg-color-red')
const [red,green] = document.querySelectorAll('.btn');

red.addEventListener('click',redBtnHandler)

function redBtnHandler(event){
    div.classList.toggle('bg-color-red')
}

green.addEventListener('click',greenBtnHandler)

function greenBtnHandler(event){
    div.classList.toggle('bg-color-green')
}