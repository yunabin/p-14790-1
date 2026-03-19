function TodoItem({ item, deleteTodo, toggleTodo }) {
    return (
        <li key={item.id} style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>
            <input type="checkbox" checked={item.completed} onChange={() => toggleTodo(item.id)} />
            <span>
                {item.id} / {item.todo}
            </span>
            <button onClick={() => deleteTodo(item.id)}>X</button>
        </li>
    )
}

export default TodoItem
