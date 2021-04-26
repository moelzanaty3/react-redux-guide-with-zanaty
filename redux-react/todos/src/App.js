import { AddTodo, VisibilityFilters } from './components'
import { TodoList } from './containers'

function App() {
  return (
    <div className="todo-app">
      <div className="ui grid centered">
        <div className="eight wide column">
          <h1 className="ui header">Todo List</h1>
          <AddTodo />
          <TodoList />
          <VisibilityFilters />
        </div>
      </div>
    </div>
  )
}

export default App
