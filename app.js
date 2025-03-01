//to compiling use tsc app.ts or tsc app.ts --watch
console.log("Hello World!");
// @ts-ignore
console.log(2 + "2" - 2);
console.log("Third commit");
var isValid = function (number, base) {
    if (base === void 0) { base = ''; }
    if (base == "base") {
        return (typeof (+number) == "number" && +number % 1 === 0 && number >= 2 && number <= 36);
    }
    else {
        return (typeof (+number) == "number" && +number % 1 === 0);
    }
};
var myPrompt = function () {
    var myNumber;
    var base;
    while (true) {
        myNumber = prompt("Enter your number");
        if (myNumber == null)
            return alert("bye-bye");
        if (!isValid(myNumber)) {
            alert("Please enter a valid number");
        }
        else {
            break;
        }
    }
    while (true) {
        base = prompt("Enter your number");
        if (base == null)
            return alert("bye-bye");
        if (!isValid(base, "base")) {
            alert("Please enter a valid base");
        }
        else {
            break;
        }
    }
    var result = parseInt(myNumber).toString(+base);
    alert("The number ".concat(myNumber, " in base ").concat(base, " is ").concat(result));
};
myPrompt();
