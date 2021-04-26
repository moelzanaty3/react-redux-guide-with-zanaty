import { ADD_TODO } from '../constants'

export const addTodo = (content) => ({
  type: ADD_TODO,
  payload: {
    id: Math.random().toString(36).substr(2, 9),
    content,
  },
})
