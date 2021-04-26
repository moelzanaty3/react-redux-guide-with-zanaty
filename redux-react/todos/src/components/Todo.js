import React from 'react'
import cx from 'classnames'
import { connect } from 'react-redux'
import { toggleTodo } from '../actions'

const Todo = ({ todo, toggleTodo }) => (
  <li className="todo-item" onClick={() => toggleTodo(todo.id)}>
    {todo && todo.completed ? '👌' : '👋'}{' '}
    <span
      className={cx(
        'todo-item__text',
        todo && todo.completed && 'todo-item__text--completed',
      )}
    >
      {todo.content}
    </span>
  </li>
)

export default connect(null, { toggleTodo })(Todo)
