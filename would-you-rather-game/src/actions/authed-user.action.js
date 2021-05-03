import { SET_AUTHED_USER } from '../constants'

export function setAuthedUser(userId) {
  return {
    type: SET_AUTHED_USER,
    payload: { userId },
  }
}
