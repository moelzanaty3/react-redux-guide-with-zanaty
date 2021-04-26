import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

class AddTodo extends React.Component {
  state = { input: '' }

  updateInput = (input) => {
    this.setState({ input })
  }

  handleAddTodo = () => {
    this.props.addTodo(this.state.input)
    this.setState({ input: '' })
  }

  render() {
    return (
      <form className="ui form">
        <div className="field">
          <input
            onChange={(e) => this.updateInput(e.target.value)}
            value={this.state.input}
          />
        </div>
        <button
          className="add-todo ui button"
          onClick={(e) => {
            e.preventDefault()
            this.handleAddTodo()
          }}
        >
          Add Todo
        </button>
      </form>
    )
  }
}
// https://react-redux.js.org/using-react-redux/connect-mapdispatch
const mapDispatchToProps = {
  addTodo,
}

export default connect(null, mapDispatchToProps)(AddTodo)
