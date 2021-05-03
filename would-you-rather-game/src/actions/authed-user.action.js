import { REMOVE_AUTHED_USER, SET_AUTHED_USER } from '../constants'

export function setAuthedUser(userId) {
  return {
    type: SET_AUTHED_USER,
    payload: { userId },
  }
}

export function removeAuthedUser(userId) {
  return {
    type: REMOVE_AUTHED_USER,
  }
}
