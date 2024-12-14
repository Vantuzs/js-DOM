//1
const btn = document.querySelector('#Btn1');
btn.addEventListener('click',alernWind);

function alernWind(event){
  alert('Привет тебе клацальщик')
}


//2 

const ashka = document.querySelector('#ashka');

ashka.addEventListener('click',addBtn);

function addBtn(event){
  const btn = document.createElement('button');
  btn.textContent = 'BUTTON!!'
  document.body.append(btn)
}


//3 

const btnOn = document.querySelector('.btnOn');

btnOn.addEventListener('click',onOff);

function onOff(event){
  const {target: {previousElementSibling}} = event
  previousElementSibling.classList.toggle('on-off')
}