const originalObj = {
    a: 3,
    b: {
        c: 7
    }
}
let newObj = {}

const deepCopyOne = (obj: Object) => {
    return JSON.parse(JSON.stringify(obj));
}

function deepCopyTwo(obj: any) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    const copy = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            copy[key] = deepCopyTwo(obj[key]);
        }
    }
    return copy;
}

newObj = deepCopyOne(originalObj);

console.log(newObj);

newObj = structuredClone(originalObj);

console.log(newObj);

newObj = deepCopyTwo(originalObj);

console.log(newObj);



