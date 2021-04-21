import { createStore } from 'redux'
import { reducer } from '../reducers'

const initialState = {
  count: 0,
}

export const store = createStore(reducer, initialState)

store.subscribe(() => {
  console.log(store.getState())
})
