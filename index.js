//https://api.openweathermap.org/data/2.5/weather?q=Dnipro&appid=f7c576ba3699bdd0b98ddcf196639992&units=metric

// API - f7c576ba3699bdd0b98ddcf196639992
// 



/* 
 <div id="root">
      <section class="sections">
        <article class="card">
          <img class="image" src="https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg" alt="#"/>
          <h3 class="title">Это футболка еже</h3>
          <header class="header">
          <div class="rate">5.00 ⭐</div>
          <div class="otzv">144 Отзывов</div>
          </header>
          <section class="main">
            <h4 class="head-opis">Описание:</h4>
          <div class="opis">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora deserunt similique rerum ut, ex exercitationem.</div>
          <div class="categoria">Women</div>
          </section>
          <footer>
          <div class="prise">Цена: 20.22$</div>
          </footer>
        </article>

      </section>
    </div> 
*/

let API_KEY = 1;
const API_BASE = 'https://fakestoreapi.com/products/'

function numberApiKey(){
    return API_KEY++ 
}

function requesAPI(){
    const url = `${API_BASE}${numberApiKey()}`
    console.log(url);
    fetch(url)
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{sozdanieCard(data)})
}


function sozdanieCard(dataObj){
    const {id,title,price,description,category,image,rating: {rate,count}} = dataObj
    // const {rating: {rate,count}} = dataObj
    const root = document.querySelector('.sections')
    // Создали секцию
    // const section = document.createElement('section');
    // section.classList.add('sections');
    // Создаём основной артикл
    const article = document.createElement('article');
    article.classList.add('card');
    // Создаём картинку
    const img = document.createElement('img');
    img.classList.add('image');
    img.setAttribute('src',image)
    //Создаём h2
    const h3 = document.createElement('h3');
    h3.classList.add('title');
    h3.innerHTML = title
    //Создаём и сразу апендим Хедер
    const header = document.createElement('header');
    header.classList.add('header');
    //
    const rates = document.createElement('div');
    rates.classList.add('rate');
    rates.innerHTML = `${rate}⭐`;
    //
    const otzv = document.createElement('div');
    otzv.classList.add('otzv');
    otzv.innerHTML = `${count} Отзывов`
    //
    header.append(rates,otzv);
    // Создаём 2 секцию и сразу апендим ее елементы к ней
    const sec2 = document.createElement('section');
    sec2.classList.add('main');
    //
    const hOpis = document.createElement('h4');
    hOpis.classList.add('head-opis');
    hOpis.innerHTML = 'Описание:';
    //
    const opis = document.createElement('div');
    opis.classList.add('opis');
    opis.innerHTML = title;
    //
    const categoria = document.createElement('div');
    categoria.classList.add('categoria');
    categoria.innerHTML = category;
    //
    sec2.append(hOpis,opis,categoria);
    // Создание футера и апенд его детей к нему
    const footer = document.createElement('footer');
    footer.classList.add('footers');
    //
    const cena = document.createElement('div');
    cena.classList.add('prise');
    cena.innerHTML = `${price}$`
    //
    footer.append(cena);
    // Апендим все к артиклу
    article.append(img,h3,header,sec2,footer);
    root.append(article);
    

}

requesAPI()
requesAPI()
requesAPI()
requesAPI()
requesAPI()
requesAPI()
requesAPI()
requesAPI()
requesAPI()
requesAPI()
requesAPI()
requesAPI()
requesAPI()
requesAPI()
requesAPI()
requesAPI()
requesAPI()
requesAPI()
requesAPI()
requesAPI()
//
requesAPI()
requesAPI()
requesAPI()
requesAPI()
requesAPI()
requesAPI()
requesAPI()
requesAPI()
