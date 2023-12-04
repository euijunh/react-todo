const TodoItem = ({todo, todosDispatch}) => {
  return (
    <li>
      {todo.txt} <button onClick={() => {todosDispatch({type: "delete", payload: todo.id})}}>❌</button>
    </li>
  )
}

export default TodoItem