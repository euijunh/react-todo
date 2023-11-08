import React from "react";

const TodoInput = ({todos, setTodos, TODOS_KEY}) => {
  const handleTodoSubmit = e => {
    e.preventDefault();
    saveTodos();
  }

  const saveTodos = () => {
    // localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
    console.log(todos, setTodos, TODOS_KEY)
  }

  return (
    <form id="todo-form" className="item" onSubmit={handleTodoSubmit}>
      <input type="text" placeholder="Write a To Do and Press Enter" required />
    </form>
  )
}

export default TodoInput