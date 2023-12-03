import TodoItem from './TodoItem'

const TodoList = ({todos, todosDispatch}) => {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} todosDispatch={todosDispatch} />
      ))}
    </ul>
  )
}

export default TodoList