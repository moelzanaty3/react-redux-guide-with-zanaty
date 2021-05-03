/**
 * Redux middleware provides a third-party extension point between dispatching an action,
 * and the moment it reaches the reducer.
 * People use Redux middleware for logging, crash reporting, talking to an asynchronous API, routing, and more.
 * https://redux.js.org/understanding/history-and-design/middleware
 */
const logger = (store) => (next) => (action) => {
  console.group(action.type)
  console.log('The action: ', action)
  const nextState = next(action)
  console.log('The new state: ', store.getState())
  console.groupEnd()
  return nextState
}

export default logger
