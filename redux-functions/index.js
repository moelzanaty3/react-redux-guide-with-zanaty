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
    compose,
    bindActionCreators,
    applyMiddleware,
} = require('redux')

const makeLouder = (string) => string.toUpperCase()
const repeatThreeTimes = (string) => string.repeat(3)
const embolden = (string) => string.bold()

// compose
/*
const makeLouderAndBoldAndRepeatThreeTimes = compose(embolden, repeatThreeTimes, makeLouder)
console.log(makeLouderAndBoldAndRepeatThreeTimes('hello'))
*/

// create store
const calculatorReducer = (state = { value: 1 }, action) => {
    if (action.type === 'ADD') {
        const value = state.value
        const amount = action.payload
        return { ...state, value: amount + value }
    }
    return state
}

const reducer = combineReducers({
    calculator: calculatorReducer,
})

const addAction = (amount) => {
    return {
        type: 'ADD',
        payload: amount,
    }
}

const logger = ({ getState }) => {
    return (next) => (action) => {
        console.log('Middleware', getState(), action)
        return next(action)
    }
}

const store = createStore(reducer, applyMiddleware(logger))

store.dispatch(addAction(4))

const dispatchAdd = bindActionCreators(addAction, store.dispatch)
dispatchAdd(2)

const unsubscribe = () => {
    console.log(store.getState())
}

unsubscribe()
