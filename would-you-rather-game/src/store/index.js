import { createStore } from 'redux'
import rootReducer from '../reducers'
import middleware from '../middlewares'
import { handleInitialData } from '../actions/shared.actions'
import {
  handleAddQuestion,
  handleAnswerQuestion,
} from '../actions/questions.action'

const store = createStore(rootReducer, middleware)

store.dispatch(handleInitialData())

store.dispatch(
  handleAddQuestion({
    optionOneText: 'option 1',
    optionTwoText: 'option 2',
    author: 'tylermcginnis',
  })
)

/* will raise error as the question not exist yet */
store.dispatch(
  handleAnswerQuestion({
    authedUser: 'tylermcginnis',
    qid: 'loxhs1bqm25b708cmbf3g',
    answer: 'optionOne',
  })
)

export default store
