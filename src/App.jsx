import { useState } from 'react'

function App() {
    const [todos, setTodos] = useState([
        { todo: '할일1', completed: true },
        { todo: '할일2', completed: true },
        { todo: '할일3', completed: false },
    ])

    const handleOnSubmit = (e) => {
        e.preventDefault() // 새로고침을 사전에 방지하는 것
        const form = e.target
        if (form.todo.value.length == 0) {
            alert('할 일을 입력해 주세요!')
            return
        }
        setTodos([...todos, { todo: form.todo.value, completed: false }])
    }

    const deleteTodo = (selectedIndex) => {
        const nextState = todos.filter((item, i) => i !== selectedIndex)
        setTodos(nextState)
    }

    const toggleTodo = (selectedIndex) => {
        const nextState = todos.map((item, i) => (i == selectedIndex ? { ...item, completed: !item.completed } : item)) // 아닐 때는 원본 데이터 그대로 둬라
        setTodos(nextState)
    }

    return (
        <>
            <form onSubmit={handleOnSubmit}>
                <input type="text" name="todo" />
                <button>등록</button>
            </form>
            <ul>
                {todos.map((item, i) => (
                    <li key={i}>
                        {JSON.stringify(item.completed)}
                        <input type="checkbox" checked={item.completed} onChange={() => toggleTodo(i)} />
                        <span>{item.todo}</span>
                        <button onClick={() => deleteTodo(i)}>X</button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default App
