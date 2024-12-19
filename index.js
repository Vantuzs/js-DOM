/* 
https://api.openweathermap.org/data/2.5/weather?q=Dnipro&appid=f7c576ba3699bdd0b98ddcf196639992&units=metric


f7c576ba3699bdd0b98ddcf196639992

// Задача: сделать погодный виджет

Алгоритм решения:
+ 1.Сдеать вёрстку елементов, которые получают от пользователя данный про Город
+ 2. Получить данные с АПИ и обработать их(подкотовить данные для отрисовки в вёрстке)
- 3. Сделать карточку с погодой и отобразить ее  
*/

const API_KAY = 'f7c576ba3699bdd0b98ddcf196639992';
const API_BASE = 'https://api.openweathermap.org/data/2.5/weather';

const btn = document.querySelector('.btn');

btn.addEventListener('click',buttonCLickHandler);

function buttonCLickHandler({target}){
    const selectValue = target.previousElementSibling.value;
requestAPI(selectValue);
}

function requestAPI(cityName){
    //1. Готовим URL
    const url = `${API_BASE}?q=${cityName}&appid=${API_KAY}&units=metric`
    console.log(url);

    //2. Делаем запрос
    fetch(url)
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
        // 3. Отрисовываем погоду
        displayWeather(data)
    })
}



/* 
</article>
      <article class="weather">
        <p>City name: Kyiv</p>
        <p>tempreature: 7&deg;C</p>
        <p>Weather description: overcast clouds</p>
      </article>
*/

function displayWeather(weatherObj){
    const {name,main:{temp},weather: [{description}]} = weatherObj

    //1. Создаём article
    const article = document.createElement('article');
    article.classList.add('weather');
    //2. СОздаём параграф с названием города
    const cityName = document.createElement('p');
    cityName.append(`City name: ${name}`);
    //3. Создаём параграф с температурой
    const tempreature = document.createElement('p');
    tempreature.append(`Tempreature: ${temp}°C`);
    //4. Создаём параграф с описанием погоды
    const weatherDescription = document.createElement('p');
    weatherDescription.append(`Weather description: ${description}`)
    // 5. К артиклу присоединяем параграфи, созданые в п.[2-4]
    article.append(cityName,tempreature,weatherDescription);
    //6. Находим секцию и присоединяем к ней артикл
    const section = document.querySelector('.wrapper');
    section.append(article);
}