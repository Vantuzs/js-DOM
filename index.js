const p = new Promise(executor) // pending
function executor(resolve,reject){
    // задача: сгенерировать случайное число в диапазоне от 0 до 15
    const number = Math.floor(Math.random()*15)

    // если число кратное 2 -> резолвим промис и возвращаем это число
    // если число не кратное 2 -> реджектим промис и возвращаем ошибку
    
    if(number%2===0){
    resolve(number); // fulfilled
    } else {
       const err =  new RangeError(`Error happenned ${number}`)
       reject(err)
    }
}

p.then((number)=> {
    console.log(number);
}, (error)=> {
    console.log(error);
})