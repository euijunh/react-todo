const TodoInput = ({todosDispatch}) => {
  const handleSubmit = e => {
    e.preventDefault();
    todosDispatch({type: "ADD", payload: e.target[0].value});
    e.target[0].value = '';
  };

  return (
    <form id="todo-form" className="item" onSubmit={handleSubmit}>
      <input type="text" placeholder="Write a To Do and Press Enter" required id="todo-input" />
    </form>
  )
}

export default TodoInput