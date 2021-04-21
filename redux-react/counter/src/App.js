import { createStore } from 'redux'
import { connect, Provider } from 'react-redux'
import './App.css'

const initialState = {
  count: 0,
}

const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const RESET = 'RESET'

const incrementValue = () => ({
  type: INCREMENT,
})

const decrementValue = () => ({
  type: DECREMENT,
})

const resetValue = () => ({
  type: RESET,
})

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 }
    case DECREMENT:
      return { count: state.count - 1 }
    case RESET:
      return { count: 0 }
    default:
      return state
  }
}

const store = createStore(reducer)

function App() {
  return (
    <main className="Counter">
      <p className="count">0</p>
      <section className="controls">
        <button>Increment</button>
        <button>Decrement</button>
        <button>Reset</button>
      </section>
    </main>
  )
}

export default App
