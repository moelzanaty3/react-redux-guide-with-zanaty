
import React from 'react'
import cx from 'classnames'

const Todo = ({ todo }) => (
  <li className="todo-item">
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

export default Todo