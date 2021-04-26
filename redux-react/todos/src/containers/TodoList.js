import React from 'react'
import { connect } from 'react-redux'
import { Todo } from '../components'

const TodoList = ({ todos }) => (
  <ul className="todo-list">
    {todos && todos.length
      ? todos.map((todo) => <Todo key={`todo-${todo.id}`} todo={todo} />)
      : 'No todos, yay!'}
  </ul>
)

const mapStateToProps = (state) => {
  const { byIds, allIds } = state.todos || {}
  const todos =
    allIds && state.todos.allIds.length
      ? allIds.map((id) => (byIds ? { ...byIds[id], id } : null))
      : null
  return { todos }
}

export default connect(mapStateToProps)(TodoList)
