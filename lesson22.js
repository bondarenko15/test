'use strict';

const arr = [1,882, 3, 16, 9, 55 ];

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