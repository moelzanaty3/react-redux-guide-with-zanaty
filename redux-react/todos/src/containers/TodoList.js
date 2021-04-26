import React from 'react'
import { connect } from 'react-redux'
import { Todo } from '../components'
import { VISIBILITY_FILTERS } from '../constants'

const TodoList = ({ todos }) => (
  <ul className="todo-list">
    {todos && todos.length
      ? todos.map((todo) => <Todo key={`todo-${todo.id}`} todo={todo} />)
      : 'No todos, yay!'}
  </ul>
)

const mapStateToProps = (state) => {
  const { byIds, allIds } = state.todos || {}
  const { visibilityFilter } = state
  const allTodos =
    allIds && state.todos.allIds.length
      ? allIds.map((id) => (byIds ? { ...byIds[id], id } : null))
      : null
  return {
    todos:
      visibilityFilter === VISIBILITY_FILTERS.ALL
        ? allTodos
        : visibilityFilter === VISIBILITY_FILTERS.COMPLETED
        ? allTodos.filter((todo) => todo.completed)
        : allTodos.filter((todo) => !todo.completed),
  }
}

export default connect(mapStateToProps)(TodoList)
