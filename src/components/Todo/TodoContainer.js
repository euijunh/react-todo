import {useImmerReducer} from 'use-immer';
import TodoList from "./TodoList";
import TodoInput from "./TodoInput";
import {TODOS_KEY} from "../../constants";
import '../../assets/css/todo.css';

const TodoContainer = () => {
  const initialTodos = localStorage.getItem(TODOS_KEY) ? JSON.parse(localStorage.getItem(TODOS_KEY)) : [];

  const reducerMap = {
    add: (todos, {payload}) => {
      todos.push({id: Date.now(), txt: payload})
      localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
    },
    delete: (todos, {payload}) => {
      const i = todos.findIndex(todo => todo.id === +payload);
      todos.splice(i, 1);
      localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
    }
  };

  const todosReducer = (todos, action) => {
    if(!reducerMap[action.type]) throw Error('Unknown action: ' + action.type);
    reducerMap[action.type](todos, action);
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