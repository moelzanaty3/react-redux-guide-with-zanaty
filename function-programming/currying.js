function sum(a, b, c) {
    return a + b + c;
}

sum(1, 2, 3); // 6

/**
 * As we see, function with the full arguments.
 * Let’s create a curried version of the function
 * see how we would call the same function (and get the same result) in a series of calls:
 */
function sumCurried(a) {
    return (b) => {
        return (c) => {
            return a + b + c
        }
    }
}

console.log(sumCurried(1)(2)(3)) // 6

// We could separate this sum(1)(2)(3) to understand it better:
const sum1 = sumCurried(1);
const sum2 = sum1(2);
const result = sum2(3);
console.log(result); // 6