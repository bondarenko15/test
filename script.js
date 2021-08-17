"use strict";

function first() {
    setTimeout(() => {
        console.log(1);
    }, 1000);
}

function second() {
    console.log(2);
}

first();
second();


function learnJS(lang, callback) {
    console.log(`Я учу ${lang}`);
    callback();
}

function done() {
    console.log('Я прошел этот урок!');
}

learnJS('JavaScript', done);
/* 

const str = "test";
const arr = [10,20,30];

console.log(str.length);
console.log(arr.length);


/* строчные методы */

/* const logg = " Hello world";

console.log(logg.slice(6, 8));

console.log(logg.substring(6, 10));

console.log(logg.substr(5, 10));
 */
/* 
числовые методы  */

/* const num = 15.5;

console.log(Math.round(num));


const test = "12.3px";
 console.log(parseInt(test));




 */








