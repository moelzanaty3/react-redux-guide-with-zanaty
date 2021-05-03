import { GET_USERS } from '../constants'

export default function usersReducer(users = {}, action) {
  switch (action.type) {
    case GET_USERS: {
      return {
        ...users,
        ...action.payload.users,
      }
    }
    default:
      return users
  }
}
