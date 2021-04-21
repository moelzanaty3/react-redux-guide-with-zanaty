// 1. Same Input => Same Output

// Compare this:
const addPure = (x, y) => x + y;
addPure(2, 4); // 6
// To this:
let x = 2;
const addINPure = (y) => {
    return x += y;
};

addINPure(4) // x === 6 (the first time)

/**
 * Pure Functions = Consistent Results
     *  The first example returns a value based on the given parameters, regardless of where/when you call it.
     *  If you pass 2 and 4, you’ll always get 6.
     *  Nothing else affects the output.
 * Impure Functions = Inconsistent Results
     *  The second example returns nothing.
     *  It relies on shared state to do its job by incrementing a variable outside of its own scope.
     *  This pattern is a developer’s nightmare fuel.
     *  Shared state introduces a time dependency.
     *      You get different results depending on when you called the function.
     *      The first time results in 6, next time is 10 and so on.
 */


