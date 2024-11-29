// 15. JS. Класи та ООП


//1)

class Boock{
    constructor(Autor,name,year,pages,numShelf){
        this.Autor = Autor;
        this.name = name;
        this.year = year;
        this.pages = pages;
        this.numShelf = numShelf;
        this.idUser = null
    }

    isVacant(){
        if(this.numShelf === null){
            return false;
        }
        return true;
        
    }
   
}

class User{
    constructor(idUser,firstName,lastName,adress){
        this.idUser = idUser;
        this.firstName = firstName;
        this.lastName = lastName;
        this.adress = adress;
        this.boockInHands = null;
        this.boockNumShelf = null;
    }

    getBoock(boockName){
        this.boockInHands = boockName;
        boockName.idUser = this.idUser;
        this.boockNumShelf = boockName.numShelf;
        boockName.numShelf = null;
    }

    giveAvay(boockName){
        this.boockInHands = null;
        boockName.idUser = null;
        boockName.numShelf = this.boockNumShelf;
        this.boockNumShelf = null;
    }
}

const user1 = new User(12,'John','Doe','FILIPINI 12g.');
const boock1 = new Boock('Prostokwashin', 'LastAutumn',2000,271,3);


//2)



class Animal{
    constructor(name,age,gender){
        this.name = name;
        this.age = age;
        this.gender = gender
    }

    agr(){
        console.log('AAAAAAAAAAAAAAAAAA');
    }
}


class Tiger extends Animal{
    constructor(name,age,gender,dlinaHvosta){
        super(name,age,gender)
        this.dlinaHvosta = dlinaHvosta;
    }

    agr(){
        console.log('Я ГОЛОДЕН!!!!!! ЩА СЬЕМ ТЕБЯ ВАЩЕЕЕЕЕЕЕЕЕ');
    }
}

class Wolf extends Animal{
    constructor(name,age,gender){
        super(name,age,gender)
    }

    agr(){
        console.log('АУУУУУУУУУУУУФФФФ!!!! ЕЖЕ ГДЕ ХАВЧИК!? ');
    }
}

const tigr1 = new Tiger('Tiger',5,'MAN');
const tigr2 = new Tiger('Tiger',5,'MAN');
const tigr3 = new Tiger('Tiger',5,'MAN');

const wolf1 = new Wolf('Wolf',6,'MAN');
const wolf2 = new Wolf('Wolf',6,'MAN');
const wolf3 = new Wolf('Wolf',6,'MAN');