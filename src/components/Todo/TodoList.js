import TodoItem from './TodoItem'

const TodoList = ({todos, setTodos}) => {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} setTodos={setTodos} />
      ))}
    </ul>
  )
}

export default TodoList