import { useTodosDispatch } from "./TodoContainer";

const TodoItem = ({todo}) => {
  const todosDispatch = useTodosDispatch();

  return (
    <li>
      {todo.txt} <button onClick={() => {todosDispatch({type: "delete", id: todo.id})}}>❌</button>
    </li>
  )
}

export default TodoItem