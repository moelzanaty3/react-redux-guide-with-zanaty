import { createStore } from 'redux'
import rootReducer from '../reducers'
import middleware from '../middlewares'
import { handleInitialData } from '../actions/shared.actions'
import { handleAddQuestion } from '../actions/questions.action'

const store = createStore(rootReducer, middleware)

store.dispatch(handleInitialData())

store.dispatch(
  handleAddQuestion({
    optionOneText: 'option 1',
    optionTwoText: 'option 2',
    author: 'tylermcginnis',
  })
)
export default store
