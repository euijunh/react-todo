const TodoItem = ({todo, todosDispatch}) => {
  return (
    <li>
      {todo.txt} <button onClick={() => {todosDispatch({type: "DELETE", payload: todo.id})}}>❌</button>
    </li>
  )
}

export default TodoItem