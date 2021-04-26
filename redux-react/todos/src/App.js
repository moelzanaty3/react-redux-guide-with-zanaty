import { AddTodo } from './components'
import { TodoList } from './containers'

function App() {
  return (
    <div className="todo-app">
      <div className="ui grid centered">
        <div className="eight wide column">
          <h1 className="ui header">Todo List</h1>
          <AddTodo />
          <TodoList todos={[]} />
        </div>
      </div>
    </div>
  )
}

export default App
