/* 

1/ Имеем div
2. Имеем 5 внопок, на каждой с которой написан цвет
3. Задача: при нажимании на кнопку, фоновый цвет дива должен изменится на определённый цвет указаный на кнопке

*/


const button = document.querySelectorAll('button');
const div = document.querySelector('#root')

console.dir(button);


// for(let i = 0; i < button.length;i++){
//     button[i].addEventListener('click',clickHandler);
// }

for(let btn of button){
    btn.addEventListener('click', clickHandler);
}

function clickHandler({target: {dataset: {color},parentNode}}){
    // const {dataset: {color}} = target
    // const {parentNode} = target
    parentNode.style.backgroundColor = color
    // div.style.backgroundColor = color
}
