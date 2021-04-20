isEven = (num) => num % 2 === 0;
result = [1, 2, 3, 4].filter(isEven);

console.log(result); // [2, 4]

/*
    See how filter uses isEven to decide what numbers to keep?
    isEven, a function, was a parameter to another function.
    It’s called by filter for each number,
    and uses the returned value true or false to determine
    if a number should be kept or discarded.
 */