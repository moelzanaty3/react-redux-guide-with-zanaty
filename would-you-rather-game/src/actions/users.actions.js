import { GET_USERS } from '../constants'

export function getUsers(users) {
  return {
    type: GET_USERS,
    payload: { users },
  }
}
