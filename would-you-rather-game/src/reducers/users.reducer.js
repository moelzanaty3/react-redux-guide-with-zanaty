import { GET_USERS, USER_ADD_QUESTION } from '../constants'

export default function usersReducer(users = {}, action) {
  switch (action.type) {
    case GET_USERS: {
      return {
        ...users,
        ...action.payload.users,
      }
    }
    case USER_ADD_QUESTION: {
      const authedUser = action.payload.authedUser
      const questionId = action.payload.qid
      return {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          questions: [...users[authedUser].questions, questionId],
        },
      }
    }
    default:
      return users
  }
}
