const collection = document.getElementsByClassName('paragraph');

for(let i =0; i < collection.length; i++ ){
    collection[i].style.color = 'green'
}


for(let p of collection){
    p.style.color = 'red'
}

const btns =  document.getElementsByTagName('button');
const arr = [...btns];



// console.log(btns);


function hello(event){
    event.target.removeEventListener('click',hello)
    console.log(`Hello user`);
}

for(let btn of btns){
    btn.addEventListener('click',hello)
}