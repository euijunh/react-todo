import {useReducer} from "react";
import TodoList from "./TodoList";
import TodoInput from "./TodoInput";
import {TODOS_KEY} from "../../constants";
import '../../assets/css/todo.css';

const TodoContainer = () => {
  const initialTodos = localStorage.getItem(TODOS_KEY) ? JSON.parse(localStorage.getItem(TODOS_KEY)) : [];

  const todosReducer = (todos, action) => {
    const saveTodos = newTodos => {
      localStorage.setItem(TODOS_KEY, JSON.stringify(newTodos));
      return newTodos;
    };

    switch(action.type) {
      case "ADD" : return saveTodos([...todos, {id: Date.now(), txt: action.payload}]);
      case "DELETE" : {
        const newTodos = todos.filter(todo => todo.id !== +action.payload);
        return saveTodos(newTodos);
      }
    }

    throw Error('Unknown action: ' + action.type);
  };

  const [todos, todosDispatch] = useReducer(todosReducer, initialTodos);

  return (
    <div id="todo-container">
      TodoContainer!
      <TodoInput todosDispatch={todosDispatch} />
      <TodoList todos={todos} todosDispatch={todosDispatch} />
    </div>
  )
}

export default TodoContainer