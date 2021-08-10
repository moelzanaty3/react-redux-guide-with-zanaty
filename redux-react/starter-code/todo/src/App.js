
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
    { id: 7, content: 'Todo 7', completed: true },
    { id: 8, content: 'Todo 8', completed: false },
  ]
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