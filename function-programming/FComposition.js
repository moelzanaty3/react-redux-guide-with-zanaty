// method applies a function against an accumulator
const compose = (...fns) => (initialVal) => fns.reduce((val, fn) => fn(val), initialVal);

const add2        = (n) => n + 2;
const square      = (n) => n * n;

let add2AndSquare = (n) => square(add2(n))
console.log(add2AndSquare(2)) // 16
// We can use a higher order function to chain them in an ordered way.
let add2AndSquareCompose = compose(add2, square)
console.log(add2AndSquareCompose(2)) // 16