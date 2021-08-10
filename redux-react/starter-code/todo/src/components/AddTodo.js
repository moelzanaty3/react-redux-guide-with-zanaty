import React from 'react'

class AddTodo extends React.Component {
  state = { input: '' }

  updateInput = (input) => {
    this.setState({ input })
  }

  handleAddTodo = () => {
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
        <button className="add-todo ui button" onClick={this.handleAddTodo}>
          Add Todo
        </button>
      </form>
    )
  }
}

export default AddTodo