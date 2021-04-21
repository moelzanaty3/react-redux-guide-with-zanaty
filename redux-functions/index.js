/**
 * applyMiddleware: function()
 * bindActionCreators: function()
 * combineReducers: function()
 * compose: function()
 * createStore: function()
 */
const {
    createStore,
    combineReducers,
    bindActionCreators
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

/**
 * The combineReducers helper function turns
 * an object whose values are different
 * reducing functions into a single reducing function you can pass to createStore.
 */
const reducer = combineReducers({
    calculator: calculatorReducer
})

const store = createStore(reducer)

// actions creators
const createAddAction = (amount) => {
    return {
        type: 'ADD',
        payload: {
            amount
        }
    }
}

store.dispatch(createAddAction(3))
// === exactly the same just helper function
const dispatchAdd = bindActionCreators(createAddAction, store.dispatch)
/**
 * Turns an object whose values are action creators,
 * into an object with the same keys,
 * but with every action creator wrapped into a dispatch call so they may be invoked directly.
 */
dispatchAdd(2)

