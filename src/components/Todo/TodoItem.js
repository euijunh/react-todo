import { useTodosDispatch } from "./TodoContainer";

const TodoItem = ({todo}) => {
  const todosDispatch = useTodosDispatch();

  return (
    <li>
      {todo.txt} <button onClick={() => {todosDispatch({type: "delete", payload: todo.id})}}>❌</button>
    </li>
  )
}

export default TodoItem