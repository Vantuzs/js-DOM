/* 

https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdrgVj6z0tfzZSheYRKDWVUhB5zIkiZ9vUo6rFSULPgctqkQSmlkwfCDZ1RMHxgFF2XKIlAJb_28QzyZaR5s6zfQ

https://mops.ua/assets/images/statiya/x12-best-hunting-dog-breeds-labrador-retriever.jpeg.pagespeed.ic.NgJcDZ_GE9.jpg

1. В HTML имеем элемент img
2. В HTML имеем 2 кнопки 
эти кнопки в data-атрибутах мистять сслыку на певну картинку (адрес картинки)

3. Задача: При нажимании на определённую кнопку должна отобрацится в тезе img определённая этой кнопке картика
*/


const [btn1,btn2] = document.querySelectorAll('button');
btn1.addEventListener('click',clickHandler);
btn2.addEventListener('click',clickHandler);

function clickHandler({target: {dataset: {src},parentNode}}){
    const img = parentNode.children[0]
    img.setAttribute('src',src)
}