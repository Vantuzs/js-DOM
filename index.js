// fetch('./user.json')
// .then((response) => {
//     return response.json(); // перетворюемо нули и оденички на JS объект
// })
// .then((data) => {
//     console.log(data);
// });

fetch('https://api.privatbank.ua/p24api/pubinfo?exchange&coursid=5')
.then((response) => {
    return response.json(); // перетворюемо нули и оденички на JS объект
})
.then((data) => {
    console.log(data);
});

