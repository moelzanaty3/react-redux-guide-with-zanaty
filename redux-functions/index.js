/**
 * applyMiddleware: function()
 * bindActionCreators: function()
 * combineReducers: function()
 * compose: function()
 * createStore: function()
 */
const {
    createStore,
    combineReducers
} = require('redux')

const calculatorReducer = (state = { value: 1 }, action) => {
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

const reducer = combineReducers({
    calculator: calculatorReducer
})

console.log(reducer)

const store = createStore(reducer)

console.log(store.getState())

store.dispatch({
    type: 'ADD',
    payload: {
        amount: 1,
    }
})

console.log(store.getState())



