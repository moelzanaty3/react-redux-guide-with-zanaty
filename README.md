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

          ````// impure function
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
          ````
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
    - we can call if the function is pure or not if passing `same args` everytime you will get `same result`
    - accept an input and returns a value without modifying any data outside its scope(Side Effects)
    - This test itself is a checklist. **A few examples of side effects are**
        - Mutating your input
        - console.log
        - HTTP calls (AJAX/fetch)
        - Changing the filesystem (fs)
        - Querying the DOM
        - random values
        - current data/time
- [x] Immutability
    - once object created, can not be changed if you need to change the object you need to take a copy first then change
      this object
    - pros
        - Predictability
        - Faster Change Detection
        - Concurrency
    - Cons
        - Performance
        - Memory Overhead
          `let book = {} book.title = '...'`
          if you building application with redux you should not mutate data because that's a fundamental principle in
          redux
- [x] Updating Objects

  ![shallow, deep copy](https://i.stack.imgur.com/AWKJa.jpg)

    - Deep copy
        - Store copies of the object's value.
        - Doesn't reflect changes made to the new/copied object in the original object.
    - Shallow Copy
        - Reflect changes made to the new/copied object in the original object
        - Stores the copy of the original object and points the references to the objects.

- [x] Updating Arrays
- [x] [Redux Data Flow Concepts](https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow)
- [x] Redux Functions
    - [x] Compose
    - [x] Reducer & CreateStore
    - [x] Store dispatch & Subscribe
    - [x] combineReducers
    - [x] bindActionCreators
    - [x] Middleware in Redux
- [x] Redux React
    - [x] Counter
    - [x] Setup Todos App
    - [x] Normalize Data -- sample [noraml-api](https://fakestoreapi.com/products)
      , [normalize-api](https://github.com/matthieuchoplin/would-you-rather/blob/master/src/utils/_DATA.js)
        - [Normalizing State Shape](https://redux.js.org/recipes/structuring-reducers/normalizing-state-shape)
        - The basic concepts of normalizing data are:
            - Each type of data gets its own "table" in the state.
            - Each "data table" should store the individual items in an object, with the IDs of the items as keys and
              the items themselves as the values.
            - Any references to individual items should be done by storing the item's ID.
            - Arrays of IDs should be used to indicate ordering.
        - [Why You Need to Normalize Redux Data](https://outline.com/wv7ZJW)
        - Now it is easy to update a user using this data. You can update the users without modifying any of the posts.
          Because the posts do not change, the Post component does not need to update, only the User component does.
          Similarly, reordering the likes only involves sorting the list of ids and does not cause each User component
          to update. This can lead to a huge performance win if you have a lot of likes.
    - [x] Todo App
        - [Demo](https://ct3e9.csb.app/)
    - mapDispatchToProps
        - As the second argument passed in to connect, mapDispatchToProps is used for dispatching actions to the store.
        - dispatch is a function of the Redux store.
        - You call store.dispatch to dispatch an action. This is the only way to trigger a state change.
        - With React Redux, your components never access the store directly - connect does it for you.
        - React Redux gives you two ways to let components dispatch actions:
            - a connected component receives props.dispatch and can dispatch actions itself.
            - connect can accept an argument called mapDispatchToProps, which lets you create functions that dispatch
              when called, and pass those functions as props to your component.
        - If you don't specify the second argument to connect(), your component will receive dispatch by default. For
          example:
          ```
          connect()(MyComponent)
          // which is equivalent with
          connect(null, null)(MyComponent)
    
          // or
          connect(mapStateToProps /** no second argument */)(MyComponent)
          ```
        - Providing a mapDispatchToProps allows you to specify which actions your component might need to dispatch.
        - Therefore, instead of calling props.dispatch(() => increment()), you may call props.increment() directly.
            - There are a few reasons why you might want to do that.
                - More Declarative
                    - encapsulating the dispatch logic into function makes the implementation more declarative.
                    - Dispatching an action and letting the Redux store handle the data flow is how to implement the
                      behavior, rather than what it does.
                    - if you define your own mapDispatchToProps, the connected component will no longer receive
                      dispatch.
                - Pass Down Action Dispatching Logic to ( Unconnected ) Child Components
                    - allows more components to dispatch actions, while keeping them "unaware" of Redux.
        - connect => encapsulates the logic of talking to the Redux store and lets you not worry about it. And this is
          what you should totally make full use of in your implementation.
        - Two Forms of mapDispatchToProps
            - Function form: Allows more customization
            - Object shorthand form: More declarative and easier to use
- [x] [Middle Ware Redux](https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware)
    - [Data Flow](https://redux.js.org/assets/images/ReduxAsyncDataFlowDiagram-d97ff38a0f4da0f327163170ccc13e80.gif)
    - So far, all the data we've worked with has been directly inside of our React+Redux client application. 
      However, most real applications need to work with data from a server, by making HTTP API calls to fetch and save items.
    - By itself, a Redux store doesn't know anything about async logic. It only knows how to synchronously dispatch actions, update the state by calling the root reducer function, and notify the UI that something has changed. Any asynchronicity has to happen outside the store.
    - we said that Redux reducers must never contain "side effects". A "side effect" is any change to state or behavior that can be seen outside of returning a value from a function. 
    - Redux middleware were designed to enable writing logic that has side effects.
    - a Redux middleware can do anything when it sees a dispatched action: log something, modify the action, delay the action, make an async call, and more.
    - implement logger
    - What if we wrote a middleware that let us pass a function to dispatch, instead of an action object? We could have our middleware check to see if the "action" is actually a function instead, and if it's a function, call the function right away. That would let us write async logic in separate functions, outside of the middleware definition.
- [x] [Thunk](https://daveceddia.com/what-is-a-thunk/)
    - thunk, n. A thunk is another word for a function. But it’s not just any old function. It’s a special (and
      uncommon) name for a function that’s returned by another. Like this:
    - function that return another function
        ```javascript
          function definitlyNotAThunk() {
            // this one is a "thunk" because it defers work for later:
            return function athunk() { // it can be named, or anonymous
              return console.log('Hi, I am A thunk')
            }     
          }
        ```
    - You already know this pattern. You just don’t call it “thunk.” If you want to execute the “do stuff now” part, you
      have to call it like wrapper_function()() – calling it twice, basically.
    - The Major idea behind a thunk is that it's code to be executed later
    - give the redux ability to wait
    - Actions are just objects. As far as Redux is concerned, out of the box actions must be plain objects, and they
      must have a type property. Aside from that, they can contain whatever you want – anything you need to describe the
      action you want to perform.
    ```javascript
          // regular action creator 
          // 1. plain object
          // 2. has a type
          // 3. whatever else you wan
          export const getAllItems = (items) => ({
            type: UPDATE_ALL_ITEMS,
            payload: { items }
          })
    ```
    - Actions are Boring Isn’t it kind of funny that Redux’s so-called “actions” don’t actually do anything? They’re
      just objects. Plain and simple and inert.
    - Wouldn’t it be cool if you could actually make them do something? Like, say, make an API call, or trigger other
      actions?
    - Since reducers are supposed to be “pure” (as in, they don’t change anything outside their scope) we can’t do any
      API calls or dispatch actions from inside a reducer.
    - If you want an action to do something, that code needs to live inside a function. That function (the “thunk”) is a
      bundle of work to be done.
    - It would be nice if an action creator could return that function – the bundle of work – instead of an action
      object. Something like this:
    ```javascript
        function getItems() {
          return function() {
            return axios.get('/items');
         };
        }
    ```
    - If only there were some way to teach Redux how to deal with functions as actions…
    - Well, this is exactly what redux-thunk does: **it is a middleware that looks at every action that passes through
      the system, and if it’s a function, it calls that function. That’s all it does.**
    - The only thing I left out of that little code snippet is that Redux will pass two arguments to thunk functions:
      dispatch, so that they can **dispatch** new actions if they need to; and **getState**, so they can access the
      current state. So you can do things like this:
    ```javascript
    
        function getAll() {
            return function(dispatch, getState) {
                return axios.get('/items').then((items) => {
                    // pretend we declared an action creator
                    // called 'getITems', and now we can dispatch it
                    dispatch(getAllItems(items));
                });
            };
        }
    ``` 
    - the getState function can be useful for deciding whether to fetch new data, or return a cached result, depending
      on the current state.
