import { combineReducers } from 'redux'
import questions from './questions.reducer'
import users from './users.reducer'
import authedUser from './authed-user.reducer'

const rootReducer = combineReducers({
  questions,
  users,
  authedUser,
})

export default rootReducer
