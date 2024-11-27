console.dir(document);



/* 

1. Все елементы на странице - окреми обьекты 
2. Все елементы можно подписать на подии

*/


function getAlert(event){
    const btn = event.target;
    let shuv = 0
    
    if(btn.style.backgroundColor === 'red'){
        btn.style.backgroundColor = 'unset'
    } else {
        btn.style.backgroundColor = 'red';

    }
}

const buttonElement = document.getElementById('btn')

buttonElement.addEventListener('click',getAlert);
// buttonElement.addEventListener('mousemove',)
// 1 вариант: Зарегестрировали обробник подии натискання миши на кнопку
// 2 вариант: навесили обробник натискання мыши на кнопку 


/* 

Сделайте кнопку, добавте ей id 
Нпишите функцию которая выводит в консоль "Привет"
Навесить обробку действия наведения мыши на эту кнопку

*/

function getHello(){
    console.log('Hello');
}

const buttonConsole = document.getElementById('button1')

buttonConsole.addEventListener('mouseenter',getHello)