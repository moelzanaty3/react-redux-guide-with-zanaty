/**
 * applyMiddleware: function()
 * bindActionCreators: function()
 * combineReducers: function()
 * compose: function()
 * createStore: function()
 */
const {
    compose,
} = require('redux')

const makeLouder = (string) => string.toUpperCase()
const repeatThreeTimes = (string) => string.repeat(3)
const embolden = (string) => string.bold()

// compose
const makeLouderAndBoldAndRepeatThreeTimes = compose(embolden, repeatThreeTimes, makeLouder)
console.log(makeLouderAndBoldAndRepeatThreeTimes('hello'))
