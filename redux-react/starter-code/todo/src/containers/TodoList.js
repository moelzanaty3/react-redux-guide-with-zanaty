import React from 'react'
import { Todo } from '../components'

const TodoList = ({ todos }) => (
  <ul className="todo-list">
    {todos && todos.length
      ? todos.map((todo) => <Todo key={`todo-${todo.id}`} todo={todo} />)
      : 'No todos, yay!'}
  </ul>
)

export default TodoList