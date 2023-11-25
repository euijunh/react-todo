import React, {useState} from "react";
import TodoInput from "./TodoInput";
import '../../assets/css/todo.css';

const TodoContainer = () => {
  const savedTodos = localStorage.getItem(TODOS_KEY);
  // if(savedTodos) {
  //   const parsedTodos = JSON.parse(savedTodos);
  //   todos = parsedTodos;
  //   parsedTodos.forEach(paintTodo);
  // }

  const [todos, setTodos] = useState([]);

  return (
    <div id="todo-container">
      TodoContainer!
      <TodoInput todos={todos} setTodos={setTodos} TODOS_KEY={TODOS_KEY} />
    </div>
  )
}

export default TodoContainer