const form = document.getElementById('name-form');

form.addEventListener('submit', consoleForm);

function consoleForm(event){
    event.preventDefault();
    const form = event.target;
    const value = form[0].value;
    console.log(`Hello ${value}`);
}

function helloUser(event){
    event.preventDefault();
    const user = event.target[0].value;
    alert(`Hello ${user}`);
}






/* 

Создать форму в html
в форме спрашивать имя пользователя

При отправлении формы - Поприветствуйте пользователя

*/