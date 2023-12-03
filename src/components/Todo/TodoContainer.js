import {useImmerReducer} from 'use-immer';
import TodoList from "./TodoList";
import TodoInput from "./TodoInput";
import {TODOS_KEY} from "../../constants";
import '../../assets/css/todo.css';

const TodoContainer = () => {
  const initialTodos = localStorage.getItem(TODOS_KEY) ? JSON.parse(localStorage.getItem(TODOS_KEY)) : [];

  const todosReducer = (todos, action) => {
    const saveTodos = newTodos => {
      localStorage.setItem(TODOS_KEY, JSON.stringify(newTodos));
    };

    switch(action.type) {
      case "ADD" : {
        todos.push({id: Date.now(), txt: action.payload})
        saveTodos(todos);
        break;
      }
      case "DELETE" : {
        const i = todos.findIndex(todo => todo.id === +action.payload);
        todos.splice(i, 1);
        saveTodos(todos);
        break;
      }
      default: {
        throw Error('Unknown action: ' + action.type);
      }
    }
  };

  const [todos, todosDispatch] = useImmerReducer(todosReducer, initialTodos);

  return (
    <div id="todo-container">
      TodoContainer!
      <TodoInput todosDispatch={todosDispatch} />
      <TodoList todos={todos} todosDispatch={todosDispatch} />
    </div>
  )
}

export default TodoContainer