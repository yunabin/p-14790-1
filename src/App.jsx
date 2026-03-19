import { useEffect, useState } from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

function App() {
    const [todos, setTodos] = useState([
        // { id: 1, todo: '할일1', completed: true },
        // { id: 2, todo: '할일2', completed: false },
        // { id: 3, todo: '할일3', completed: false },
    ])
    useEffect(() => {
        fetch('https://dummyjson.com/todos')
            .then((res) => res.json())
            .then((res) => setTodos(res.todos))
    }, [])

    // let lastId = useRef(4)

    const addTodo = (todo) => {
        fetch('https://dummyjson.com/todos/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                todo,
                completed: false,
                userId: 5,
            }),
        })
            .then((res) => res.json())
            .then(console.log)
    }

    const deleteTodo = (selectedId) => {
        fetch(`https://dummyjson.com/todos/${selectedId}`, {
            method: 'DELETE',
        })
            .then((res) => res.json())
            .then(console.log)
    }

    const toggleTodo = (selectedId) => {
        const nextState = todos.map((item) => (item.id == selectedId ? { ...item, completed: !item.completed } : item))
        setTodos(nextState)
    }

    return (
        <>
            <TodoForm addTodo={addTodo} />
            <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
        </>
    )
}

export default App
