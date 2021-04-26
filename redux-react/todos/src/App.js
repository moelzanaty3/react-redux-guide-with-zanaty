import { AddTodo } from './components'
import { TodoList } from './containers'

function App() {
  const todos = [
    { id: 1, content: 'Todo 1', completed: true },
    { id: 2, content: 'Todo 2', completed: false },
    { id: 3, content: 'Todo 3', completed: false },
    { id: 4, content: 'Todo 4', completed: true },
    { id: 5, content: 'Todo 5', completed: true },
    { id: 6, content: 'Todo 6', completed: false },
  ]
  const normalized = {
    todos: {
      allIds: [1, 2, 3, 4, 5, 6],
      byIds: {
        1: { content: 'Todo 1', completed: true },
        2: { content: 'Todo 2', completed: false },
        3: { content: 'Todo 3', completed: false },
        4: { content: 'Todo 4', completed: true },
        5: { content: 'Todo 5', completed: false },
        6: { content: 'Todo 6', completed: false },
      },
    },
  }

  return (
    <div className="todo-app">
      <div className="ui grid centered">
        <div className="eight wide column">
          <h1 className="ui header">Todo List</h1>
          <AddTodo />
          <TodoList todos={todos} />
        </div>
      </div>
    </div>
  )
}

export default App
