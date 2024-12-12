const str1 = 'hello';
const str2 = new String('hello');


// Regexp

const reg1 = /^[a-zA-Z]{2,5}$/;
console.log(reg1);

const reg2 = new RegExp('^[a-zA-Z]{2,5}$');
console.log(reg2);

// Експерементируе: валидируеи имеил через регулярки

const testString = 'sunnyday56@gmail.com';
const emailRegExp = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/
emailRegExp.exec(testString); // array
emailRegExp.test(testString); // true

testString.match(emailRegExp); // array -- сработаетк как exec

let str = 'BLue SKY';
str.replace(/[A-Z]{3}/,'sky'); // BLue sky