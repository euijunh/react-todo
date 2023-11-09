import React, {useState} from "react";
import TodoInput from "./TodoInput";
import BackgroundImageList from "../../constants/BackgroundImageList";
import '../../assets/css/todo.css';

const TodoContainer = () => {
  const TODOS_KEY = "todos";
  const chosenImage = BackgroundImageList[Math.floor(Math.random() * BackgroundImageList.length)];
  document.body.style.backgroundImage = `url("${chosenImage}")`;
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