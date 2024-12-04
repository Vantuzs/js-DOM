// const div = document.createElement('div'); // 1. Создаём елемент в памяти
// div.append('Hello world'); // 2. До этого елемента присоединяем текстовый узел
// document.body.append(div); // 3. Присоединяем созданый елемент к body
// console.log(div);

function createDiv(){
    const div = document.createElement('div'); // 1. Создаём елемент в памяти
    div.classList.add('box')
    div.append('Hello world'); // 2. До этого елемента присоединяем текстовый узел
    document.body.append(div); // 3. Присоединяем созданый елемент к body
}

const btn = document.querySelector('button');
btn.addEventListener('click',createDiv)