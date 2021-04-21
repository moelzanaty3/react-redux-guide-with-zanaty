import { connect } from 'react-redux'
import './App.css'
import { decrement, increment, reset } from './actions'

function App({ count, dispatch }) {
  return (
    <main className="Counter">
      <p className="count">{count}</p>
      <section className="controls">
        <button
          onClick={() => {
            dispatch(increment())
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            dispatch(decrement())
          }}
        >
          Decrement
        </button>
        <button
          onClick={() => {
            dispatch(reset())
          }}
        >
          Reset
        </button>
      </section>
    </main>
  )
}

const mapStateToProps = ({ count }) => ({ count })

// what I am connecting and what I am connecting to
// https://react-redux.js.org/using-react-redux/connect-mapdispatch
export default connect(mapStateToProps)(App)
