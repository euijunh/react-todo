const TodoInput = ({addTodo}) => {
  return (
    <form id="todo-form" className="item" onSubmit={addTodo}>
      <input type="text" placeholder="Write a To Do and Press Enter" required id="todo-input" />
    </form>
  )
}

export default TodoInput