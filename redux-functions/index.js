/**
 * applyMiddleware: function()
 * bindActionCreators: function()
 * combineReducers: function()
 * compose: function()
 * createStore: function()
 */
const {
    createStore
} = require('redux')

const reducer = (state = { value: 1 }, action) => {
    return state
}
const store = createStore(reducer)

console.log(Object.keys(store))
console.log(store.getState())