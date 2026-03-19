import TodoItem from './TodoItem'

function TodoList({ todos, deletTodo, toggleTodo }) {
    return (
        <ul>
            {todos.map((item) => (
                <TodoItem key={item.id} item={item} deleteTodo={deletTodo} toggleTodo={toggleTodo} />
            ))}
        </ul>
    )
}

export default TodoList
