//to compiling use tsc app.ts or tsc app.ts --watch

console.log("Hello World!");
// @ts-ignore
console.log(2 + "2" - 2);

console.log("Third commit");

const isValid = (number: any, base: "" | "base" = ''): boolean => {
    if (base == "base") {
        return (typeof (+number) == "number" && +number % 1 === 0 && number >= 2 && number <= 36)
    } else {
        return (typeof (+number) == "number" && +number % 1 === 0)
    }
}

const myPrompt = () => {
    let myNumber: any;
    let base: any;
    while (true) {
        myNumber = prompt("Enter your number");
        if (myNumber == null) return alert("bye-bye");
        if (!isValid(myNumber)) {
            alert("Please enter a valid number");
        } else {
            break;
        }
    }
    while (true) {
        base = prompt("Enter your number");
        if (base == null) return alert("bye-bye");
        if (!isValid(base, "base")) {
            alert("Please enter a valid base");
        } else {
            break;
        }
    }
    const result = parseInt(myNumber).toString(+base);
    alert(`The number ${myNumber} in base ${base} is ${result}`);
}

myPrompt()

