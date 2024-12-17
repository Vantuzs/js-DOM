fetch('./user.json')
.then((response) => {
    return response.json(); // перетворюемо нули и оденички на JS объект
})
.then((data) => {
    console.log(data);
})
.catch((err) => {
    console.log(err);
})
.finally(()=> {
    console.log('Finaly question closed');
})

