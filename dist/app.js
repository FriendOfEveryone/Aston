"use strict";
// 1
const originalObj = {
    a: 3,
    b: {
        c: 7
    }
};
let newObj = {};
function deepCopy(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    const copy = Array.isArray(obj) ? [] : {};
    Object.keys(obj).forEach(key => {
        if (obj[key]) {
            // @ts-ignore
            copy[key] = deepCopy(obj[key]);
        }
    });
    return copy;
}
newObj = deepCopy(originalObj);
newObj.a = 10;
newObj.b.c = 11;
console.log('original: ', originalObj.a);
console.log('original: ', originalObj.b.c);
console.log('newObj: ', newObj.a);
console.log('newObj: ', newObj.b.c);
// 2
const array = [1, 5, 3, 7, 1, -5];
const invalidArray = [1, 5, 3, "7", 1, -5];
const objForInterval = { f: 2, t: 5 };
let newArray;
const selectFromInterval = (arr, a, b) => {
    if (!Array.isArray(arr)) {
        console.log("First parameter must be an array!");
        return;
    }
    if (!arr.every(item => typeof item === 'number')) {
        console.log("There are not only numbers in the array!");
        return;
    }
    if (a % 1 !== 0 || b % 1 !== 0) {
        console.log("Incorrect input parameters!");
        return;
    }
    let from;
    let to;
    if (a <= b) {
        from = a;
        to = b;
    }
    else {
        from = b;
        to = a;
    }
    return arr.filter(item => item >= from && item <= to).sort((a, b) => a - b);
};
newArray = selectFromInterval(array, 4, 1);
console.log('newArray: ', newArray);
newArray = selectFromInterval(invalidArray, 4, 1); // must be "There are not only numbers in the array!"
console.log('newArray: ', newArray);
newArray = selectFromInterval(objForInterval, 4, 1);
console.log('newArray: ', newArray); // must be "First parameter must be an array!"
newArray = selectFromInterval(array, 4.4, 1);
console.log('newArray: ', newArray); //  must be "Incorrect input parameters!"
const arrObj = [
    { name: 'Bob', age: '25' },
    { name: 'Ann', age: '30' },
    { name: 'Tom', age: '35' },
];
const searchFunc3 = (item, param) => {
    console.log(item[param]);
};
arrObj.forEach(item => searchFunc3(item, 'age'));
arrObj.forEach(item => searchFunc3(item, 'name'));
// 4
const str = 'My Happy Hell';
const reverseString = (srt) => {
    return str.split('').reverse().join('|');
};
console.log(reverseString(str));
