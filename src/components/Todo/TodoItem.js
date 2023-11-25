import React from "react";

const TodoItem = ({todo, deleteTodo}) => {
  return (
    <li>
      {todo.txt} <button onClick={() => {deleteTodo(todo.id)}}>❌</button>
    </li>
  )
}

export default TodoItem