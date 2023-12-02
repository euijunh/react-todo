const TodoItem = ({todo, setTodos}) => {
  return (
    <li>
      {todo.txt} <button onClick={() => {setTodos({type: "DELETE", payload: todo.id})}}>❌</button>
    </li>
  )
}

export default TodoItem