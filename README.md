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
- [ ] Function Programming
- [ ] What is Functional Programming?
- [ ] Functions as First-Class Citizens
- [ ] Higher-order Functions
- [ ] Functional Composition
- [ ] Composing and Piping
- [ ] Currying
- [ ] Pure Functions
- [ ] Immutability
- [ ] Updating Objects
- [ ] Updating Arrays
- [ ] Enforcing Immutability