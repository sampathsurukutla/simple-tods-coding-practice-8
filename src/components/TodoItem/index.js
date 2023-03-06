import './index.css'

const TodoItem = props => {
  const {initialTodosList, deleteTodo} = props
  const {id, title} = initialTodosList

  const onDelete = () => {
    deleteTodo(id)
  }

  return (
    <li className="list-item-container">
      <p>{title}</p>
      <button className="button" type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
