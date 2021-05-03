import { createStore } from 'redux'
import rootReducer from '../reducers'
import middleware from '../middlewares'

const store = createStore(rootReducer, middleware)

export default store
