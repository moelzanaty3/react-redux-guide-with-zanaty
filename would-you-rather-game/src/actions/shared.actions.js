import { getInitialData } from '../utils/api'
import { getUsers } from './users.actions'
import { getQuestions } from './questions.action'
import { setAuthedUser } from './authed-user.action'

const AUTHED_ID = 'tylermcginnis'

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(getUsers(users))
      dispatch(getQuestions(questions))
      dispatch(setAuthedUser(AUTHED_ID))
    })
  }
}
