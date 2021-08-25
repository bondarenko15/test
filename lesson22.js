'use strict';

const arr = [1, 882, 3, 16, 9, 55 ];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}


arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}

const str = prompt("", "");
const products = str.split(", ");
console.log(products.join("; "));

arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} внутри массива ${arr}`);
});


let a = 5;  
    b = a;

b = b + 5;

 console.log(b);
 console.log(a);




 function testOne(mainObj) {
    let objCopy = {};

    let key;
    for(key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
 };

 const obj = {
    a: 5,
    b: 7,
    c: {
        x: 5,
        y: 12
    }
 };

 const copy = testOne(obj);

 copy.a = 10;
 copy.c.y = 20;

 console.log(copy);
 console.log(obj);



 const add = {
    d: 5,
    e: 10
 };

 const clone = Object.assign({}, add);

 clone.d = 40;

 console.log(add);
 console.log(clone);

 const oldArray = ['a', 'b', 'c'];
 const newArray = oldArray.slice();

 newArray[2] = 'aaa';

 console.log(newArray);
 console.log(oldArray);


 function log(a, b, c) {
     console.log(a);
     console.log(b);
     console.log(c);

 };

 const num = [2, 5, 7];

 log(...num);


 const newObj = {
     a: 10,
     b: 20, 
 }

 const q = {...newObj};
 q.a = 100;
 console.log(newObj);
 console.log(q);