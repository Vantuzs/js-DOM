//1
const sec = document.createElement('section');
sec.setAttribute('id','root');
sec.innerHTML = 'brush';
sec.style.color = 'red';
document.body.append(sec);

//2 

const div = document.querySelector('#divas');
div.style.backgroundColor = 'violet';
div.style.color = 'white'

//3 

// prompt('Введите свое имя ПЖ');

const prom = prompt('Введите свое имя ПЖ');

const h1Pr = document.querySelector('.h1-prom');

h1Pr.innerHTML = `Привет Дорогой ${prom}!!!!`