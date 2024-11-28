// const collection = document.getElementsByClassName('paragraph');

// for(let i =0; i < collection.length; i++ ){
//     collection[i].style.color = 'green'
// }


// for(let p of collection){
//     p.style.color = 'red'
// }

// const btns =  document.getElementsByTagName('button');
// const arr = [...btns];



// // console.log(btns);


// function hello(event){
//     event.target.removeEventListener('click',hello)
//     console.log(`Hello user`);
// }

// for(let btn of btns){
//     btn.addEventListener('click',hello)
// }




//////////////////////////////////////////////////////////////////////////////////////////////////////////



const btn = document.querySelector('button');
// console.log(btn);

const btn2 = document.querySelector('.super-btn');
// console.log(btn2);

const btn3 = document.querySelector('#btnbtn');
// console.log(btn3);

const btnCollection = document.querySelectorAll('button');
console.log(btnCollection);

const paragraphCollection = document.querySelectorAll('.paragraph:nth-child(even)');

paragraphCollection[0].innerHTML = 'test'

for(let p of paragraphCollection){
    p.style.backgroundColor = 'yellow';
}

console.log(paragraphCollection);





