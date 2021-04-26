import { ADD_TODO, SET_FILTER, TOGGLE_TODO } from '../constants'

export const addTodo = (content) => ({
  type: ADD_TODO,
  payload: {
    id: Math.random().toString(36).substr(2, 9),
    content,
  },
})

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: { id },
})

export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: { filter },
})
