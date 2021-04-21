# NOTES

- [x] Why Redux?
    - I think when someone says that Redux is a predictable state container it means that redux has a very strict way
      how to change the data, sometimes called unidirectional data flow.
    - I mostly used it in React application, so I can tell which problem it solves in this case. While your application
      is small, you probably will not see the reason to use Redux, but when it grows, when you have lots of components
      which use the same data and have to communicate with each other, it becomes really painful to store all state
      somewhere in the root components and pass it through all the children. There may be performance issues as well,
      all components between a root one a child which needs some part of your state will be re-rendered.
    - So using Redux easily connect your components and select those parts of the state which they need. Also,
      communication between components becomes much easier, instead of passing callbacks to props, your components just
      listed to state and represent it, any time you need to change a state just send an action.
    - Do you see the problem? While our application grows to a higher number of components, maintaining data consistency
      becomes a hairy challenge. It’s not an easy task to manage each component’s state while sharing it with many other
      components. You’ll likely experience data inconsistency bugs, a fearsome nightmare for frontend developers.
      ![image source Codecentric](https://blog.asayer.io/static/f3b749e44077c9d0fbfc06e129be1439/1727d/5538b516f2c347f8846fe3c15d0d100e.png)
    - As shown in the image, Redux takes away the responsibility from individual components to manage a state. Instead,
      we create a single store that handles our state management. On top of that, all communication regarding reading,
      updating, or creating data happens via the store. It prevents data inconsistency bugs from appearing. Moreover,
      components can listen to state changes to update the UI and avoid these data inconsistency bugs.
    - Lastly, you can install
      the [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)
      that give you insights into your application’s current state to simplify debugging or testing your application.
      It’s a great incentive to get started with Redux.
- [x] What is Redux?
    - state management lib for javascript applications
    - It’s lightweight at 2KB (including dependencies), so you don’t have to worry about it making your application’s
      asset size bigger.
    - we can use it with react/angular/vue/vanilla js because it's state management lib, so it does not matter
    - Centralizes application's state
    - Makes data flow transparent and predictable
    - With Redux, the state of your application is kept in a store, and each component can access any state that it
      needs from this store.
    - How does it work?
      ![redux architecture](https://miro.medium.com/max/919/1*EdiFUfbTNmk_IxFDNqokqg.png)
        - Users interact with the interface and triggers an action
            - Action with/without payload is sent to a reducer using the dispatcher
            - Reducer checks if it handles the action and produces a new state based on the action and its payload
            - State changes are notified via subscription methods
            - UI renders again based on state changes received via the subscription method
- [x] Pros and Cons of Redux
    - Pros
        - Predictable state changes
        - Centralized state
        - Easy Debugging
        - Preserve page state
        - undo/redo
        - ecosystem
    - Cons
        - Complexity
        - Verbosity:- you have to write boiler-plate code to get things done
- [x] Function Programming
    - is **a programming paradigm** in which we try to bind everything in pure mathematical functions style.
    - It is a **declarative** type of programming style. Its main focus is on “what to solve” in contrast to an **
      imperative**
      style where the main focus is “how to solve”
    - focuses on results, not the process
    - Data is immutable -> Unchanging over time or unable to be changed. / its state cannot change after it’s created.
      If you want to change an immutable object, you can’t. Instead, you create a new object with the new value.
    - Decompose the problem into 'functions
    - It does not support iteration like loop statements and conditional statements like If-Else
    - Here's some most functional programming languages => Haskell, Clojure, Scala, F#
    - The first fundamental concept we learn when we want to understand functional programming is pure functions. But
      what does that really mean? What makes a function pure? So how do we know if a function is pure or not? Here is a
      very strict definition of purity
        - It returns the same result if given the same arguments
        - It does not cause any observable side effects example
            ```// impure function
            var tip = 0;
             function calculateTip( mealTotal ) {
                tip = 0.15 * mealTotal;
             }
            calculateTip( 150 )
            console.log(tip)
            
            // pure function -> The pure function will 
            // return the exact result every time, 
            // and it doesn’t mutate any data outside of it.
            function isPure(x,y) {
                return x * y
            }
            console.log(isPure(3,5));```
- [x] Functions as First-Class Citizens
    - In JavaScript, functions are first-class objects, which means they can be:
        - stored in a variable `let fn = function doSomething() {}`, object `let obj = { doSomething : function(){} }`,
          or array `arr.push(function doSomething() {})`
        - pass as an argument `doAction(function doSomething(){});`
            - doSomething is a callback -> is a function passed as an argument to another function.
        - return from other function
- [x] Higher-order Functions
    - A function that accepts and/or returns another function
- [x] Functional Composition
    - is the process of combining two or more functions to produce a new function.
- [x] Currying
    - is a technique of evaluating function with multiple arguments, into sequence of functions with single argument
    - is a transformation of functions that translates a function from callable as `f(a, b, c)` into callable
      as `f(a)(b)(c)`
    - when a function, instead of taking all arguments at one time, takes the first one and return a new function that
      takes the second one and returns a new function which takes the third one, and so forth, until all arguments have
      been fulfilled. That is, when we turn a function call `sum(1,2,3)` into `sum(1)(2)(3)`
    - **Why it’s useful ?**
        - Currying helps we avoid passing the same variable again and again.
        - It helps to create a higher order function
- [x] Pure Functions
    ![3 ways to avoid side effects](https://cdn-media-1.freecodecamp.org/images/0*4rGYQyYm_m8Byoyj.png)
    - we can  call if the function is pure or not if passing `same args` everytime you will get `same result` 
    - accept an input and returns a value without modifying any data outside its scope(Side Effects)
    - This test itself is a checklist. **A few examples of side effects are**
        * Mutating your input
        * console.log
        * HTTP calls (AJAX/fetch)
        * Changing the filesystem (fs)
        * Querying the DOM
        * random values 
        * current data/time
- [x] Immutability
    - once object created, can not be changed if you need to change the object you need to take a copy first then change this object
    - pros 
        - Predictability 
        - Faster Change Detection 
        - Concurrency 
    - Cons 
        - Performance 
        - Memory Overhead
    `let book = {}
     book.title = '...'`
          if you building application with redux you should not mutate data because that's a fundamental principle in redux
- [ ] Updating Objects
- [ ] Updating Arrays
- [ ] Enforcing Immutability