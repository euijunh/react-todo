import {useState} from "react";
import TodoList from "./TodoList";
import TodoInput from "./TodoInput";
import {TODOS_KEY} from "../../constants";
import '../../assets/css/todo.css';

const TodoContainer = () => {
  const savedTodos = localStorage.getItem(TODOS_KEY) ? JSON.parse(localStorage.getItem(TODOS_KEY)) : [];
  const [todos, setTodos] = useState(savedTodos);

  const saveTodos = newTodos => {
    setTodos(newTodos);
    localStorage.setItem(TODOS_KEY, JSON.stringify(newTodos));
  };

  const addTodo = e => {
    e.preventDefault();
    const newTodo = {
      id: Date.now(),
      txt: e.target[0].value
    }
    e.target[0].value = '';
    saveTodos([...todos, newTodo]);
  };

  const deleteTodo = id => {
    const newTodos = todos.filter(todo => todo.id !== +id);
    saveTodos(newTodos);
  };

  return (
    <div id="todo-container">
      TodoContainer!
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  )
}

export default TodoContainer