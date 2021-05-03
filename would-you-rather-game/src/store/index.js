import { createStore } from 'redux'
import rootReducer from '../reducers'
import middleware from '../middlewares'
import { handleInitialData } from '../actions/shared.actions'

const store = createStore(rootReducer, middleware)

store.dispatch(handleInitialData())

export default store
