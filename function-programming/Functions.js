function sayMyName() {
    return 'Mohammed Elzanaty'
}

/* Assign function to a variable */
let fn = sayMyName // pass a reference to the variable
console.log(fn()) // Mohammed Elzanaty

/* Pass it as an argument */
function greet(fnMessage) {
    console.log('Hello, ' + fnMessage())
}

greet(sayMyName) // Hello, Mohammed Elzanaty

/* Returned from another function */

function doSomething() {
    return function () {
        return 'Do something'
    }
}

let fnc = doSomething()
let message = fnc()
console.log(message) // Do something
