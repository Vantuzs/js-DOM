/* 

Задание: создать конвертёр валют

Декомпозиция

+ 1. Создать HTML- страницу с формой которая имеет два поля ввода
одно поле для введения суммы в одной валюте
другое поле - для выбора валюты в которую мы будем эту сумму конвертировать

+ 2. Добавить в форму кнопку "Конвертировать"

3. Написать JS Обробник действия отправки формы:
- получить значение введённой суммы и выбраной волюты
- вычислить конвертованую сумму, умноживши введённую сумму на курс обмена выбраной пользователем валюты
- вывести результат конвертации на страницу для отоброжения результата (innerHTML)

4. Подписать форму на действие "submit", в качестве Лисенера использовать функицю с п. 3
*/

const CURRENCY = {
    USD_TO_UAH: 41.58,
    EUR_TO_UAH: 43.88
}

const converterForm = document.querySelector('#currency-converter-form');

converterForm.addEventListener('submit',convertHandler);

function convertHandler(event){
    event.preventDefault();

    const amound = Number(document.querySelector('#amound').value);
    const currency = document.querySelector('#currency').value;
    
    let convertedAmount;

    const {USD_TO_UAH: usdCourse, EUR_TO_UAH: eurCourse} = CURRENCY

    switch (currency) {
        case 'USD': {
            convertedAmount = amound* usdCourse
            break;
        }
        case 'EUR':{
            convertedAmount = amound * eurCourse    
            break;
        }
        default: throw new Error('Something problem..............!!!!!!')

    }

    // if(currency === 'USD'){
    //     convertedAmount = amound* usdCourse
    // } else if (currency === 'EUR'){
    //     convertedAmount = amound * eurCourse
    // } else{
    //     throw new Error('Something problem..............!!!!!!')
    // }

    const resultDiv = document.querySelector('#result');
    resultDiv.innerHTML = `${amound} ${currency} = ${convertedAmount.toFixed(2)} UAH`
}

// Конвертер температуры
const foringeitForm = document.querySelector('#Foring');

foringeitForm.addEventListener('submit',foringateFunc)

function foringateFunc(event){
    event.preventDefault();
    const value = Number(document.querySelector('#inpForing').value);
    const result = document.querySelector('#divForin');
    result.innerHTML = `${value}C = ${value*9/5+32}F`
}