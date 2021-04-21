/**
 * applyMiddleware: function()
 * bindActionCreators: function()
 * combineReducers: function()
 * compose: function()
 * createStore: function()
 */
const {
    createStore,
} = require('redux')

const reducer = (state = { value: 1 }, action) => {
    console.log('Something happened', action)
    switch (action.type) {
        case 'ADD':
            const value = state.value
            const amount = action.payload.amount
            // state.value = value + amount
            state = { value: value + amount }
            return state
        default:
            return state
    }
}

const store = createStore(reducer)

const first = store.getState()

store.dispatch({
    type: 'ADD',
    payload: {
        amount: 2
    }
})

const second = store.getState()
console.log(first === second) // will be true when you mutate the state as it will be same reference


const unsubscribe = store.subscribe(() => {
    console.log(store.getState().value)
})

store.dispatch({
    type: 'ADD',
    payload: {
        amount: 2
    }
})
store.dispatch({
    type: 'ADD',
    payload: {
        amount: 2
    }
})

unsubscribe()

store.dispatch({
    type: 'ADD',
    payload: {
        amount: 2
    }
})