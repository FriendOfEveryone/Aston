"use strict";
// console.log("Hello World!")
function memoize(callback) {
    const cache = {};
    return function (...args) {
        const key = JSON.stringify(args.sort());
        console.log(key);
        console.log('cache before ', cache);
        if (cache[`${key}`] !== undefined) {
            console.log('Get from cache');
            return cache[`${key}`];
        }
        console.log('First calculation');
        const result = callback(...args);
        cache[`${key}`] = result;
        console.log('cache after ', cache);
        return result;
    };
}
const sum = (...args) => {
    return args.reduce((acc, cur) => acc + cur, 0);
};
const memoSum = memoize(sum);
memoSum(1, 5, 2, 6);
console.log('next');
memoSum(1, 5, 2, 6);
console.log('next');
memoSum(1, 5, 6, 2);
// 2
const sumCorr = (a) => {
    return (b) => {
        if (b !== undefined) {
            return sumCorr(a + b);
        }
        return a;
    };
};
console.log(sumCorr(1)(2)(4)(5)(-12)());
// 3
const testObj = {
    item: 'Test Item'
};
function someFunc() {
    console.log(`I output only external context: ${this.item}`);
}
const boundFunc = someFunc.bind(testObj);
boundFunc();
// 4
const objForBind1 = {
    item: [1, 2, 3, 4],
    name: 'Denis'
};
const objForBind2 = {
    item: [1, 2, 55, 92],
    car: 'Mustang'
};
const callback1 = (someObj) => {
    console.log(someObj.name);
};
const callback2 = (someObj) => {
    console.log(someObj.car);
};
const myBindFunc = (callback, obj) => {
    return () => {
        callback(obj);
    };
};
const firstFunc = myBindFunc(callback1, objForBind1);
const TwiceFunc = myBindFunc(callback2, objForBind2);
firstFunc();
TwiceFunc();
// Да, четвертая задача выглядит ужасно из-за нейминга, извиняюсь. Учитывая предыдущие задачи, обычные имена уже заняты)
