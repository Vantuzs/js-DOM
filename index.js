function loadImage(src){
    //1. Создаем картинку
    const img = document.createElement('img');
    img.setAttribute('src',src);
//2. Создаем елемент в рёстке который будет служить нам для того что указывает загружаем мы что-то или нет
    const h2 = document.createElement('h2');
    h2.id = 'loading-h2';
    h2.append('Loading image...');
    document.body.append(h2);

    // 3. Промисыфикация - когда мы обворачиваем какойто асинхронный код в промис, для того что бы забеспечити себе удобную работу
return new Promise((resolve,reject) =>{
    //4. Создаём таймаут на 5 секунд для загрузки картинки
    const timeoutId = setTimeout(()=>{
    reject('Image ne zagruzitca patamuchta proshlo 5 secunda')        
    },5000);

    //ПОдписываем созданую картинку на событие load
    // Если картинка загрузится - мы резолвим промис с елементом картинки
    img.addEventListener('load',()=>{
        clearTimeout(timeoutId)
        resolve(img);
    });

    //Подписываем картинку на событие error
    // Если катритка не загрузится - мы реджектим с сообщением про ошибку
    img.addEventListener('error',()=>{
        clearTimeout(timeoutId)
        reject('Image can`t be loaded')
    })
})
}

loadImage('https://cs13.pikabu.ru/post_img/2023/10/28/2/1698456437194820220.jpg')
.then((img)=>{
    document.body.append(img)
},(errorMessage)=>{
    const h2 = document.createElement('h2');
    h2.append(errorMessage);
    document.body.append(h2)
    
})
.finally(()=>{
    const loadH2 = document.querySelector('#loading-h2');
    loadH2.remove()
})
