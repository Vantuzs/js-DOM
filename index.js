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


/* 

Сделать кнопку которая будет менять тему сайта

Если вы нажимаете на эту кнопку - на сайте включается тёмный режим (для тега body установите backgroundColor = темно)
а для текста = color: white;




*/


const body = document.querySelector('body');
const btn = document.querySelector('#darck')

btn.addEventListener('click',bodyFnc)

function bodyFnc(){
    console.log(body.classList);
    body.classList.toggle('darck')
    btn.classList.toggle('btnCl')
    body.classList.forEach((a)=> {return console.log(a==='darck')})
    
    let o;
    body.classList.forEach((a)=>{
        if(a==='darck'){
            return o=true
        } return o = false})
    if(o===true){
        btn.innerHTML = 'Тёмный стиль вкл.'
        
    } else{
        btn.innerHTML = 'Тёмный стиль'
    }
    console.log(o);
}