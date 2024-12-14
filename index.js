/*


EventLoop - механізм, який керує виконанням коду.

Коцептуально, ідея Event Loop полягає у тому, щоб не заблокувати основний потік даних.
Технічно ця концепція реалізується через Google Chrome , який написаний на С++.

*/


// setTimeout();

// 1. завантажується сторінка
// 2. реєструємо таймаут
// 3. після того, як пройде затримка - запускаємо якусь функцію

function func() {
    console.log(2+2);
}

// func();
const timeoutID = setTimeout(func, 2000);


func();


function helloUser(a){
    alert('Helo user!')
    clearTimeout(timeHello)
}

const timeHello = setTimeout(helloUser,8000);
