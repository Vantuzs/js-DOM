console.dir(document);



/* 

1. Все елементы на странице - окреми обьекты 
2. Все елементы можно подписать на подии

*/


function getAlert(){
    alert('Hello ther!')
}

const buttonElement = document.getElementById('btn')

buttonElement.addEventListener('click',getAlert);
// buttonElement.addEventListener('mousemove',)
// 1 вариант: Зарегестрировали обробник подии натискання миши на кнопку
// 2 вариант: навесили обробник натискання мыши на кнопку 