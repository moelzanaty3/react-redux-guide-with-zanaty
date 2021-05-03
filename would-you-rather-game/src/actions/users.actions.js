import { GET_USERS, USER_ADD_QUESTION } from '../constants'

export function getUsers(users) {
  return {
    type: GET_USERS,
    payload: { users },
  }
}

export function userAddQuestion({ authedUser, qid }) {
  return { type: USER_ADD_QUESTION, payload: { authedUser, qid } }
}
