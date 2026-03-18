import { useRef, useState } from 'react'

function App() {
    const [todos, setTodos] = useState([
        { id: 1, todo: '할일1', completed: true },
        { id: 2, todo: '할일2', completed: true },
        { id: 3, todo: '할일3', completed: false },
    ])
    let lastId = useRef(4)
    //초기화값을 4로 설정

    const handleOnSubmit = (e) => {
        e.preventDefault() // 새로고침을 사전에 방지하는 것
        const form = e.target
        if (form.todo.value.length == 0) {
            alert('할 일을 입력해 주세요!')
            return
        }
        setTodos([...todos, { id: lastId.current, todo: form.todo.value, completed: false }])
        lastId.current++
    }

    const deleteTodo = (selectedID) => {
        const nextState = todos.filter((item) => item.id !== selectedID)
        setTodos(nextState)
    }

    const toggleTodo = (selectedID) => {
        const nextState = todos.map((item) => (item.id == selectedID ? { ...item, completed: !item.completed } : item)) // 아닐 때는 원본 데이터 그대로 둬라
        setTodos(nextState)
    }

    return (
        <>
            <form onSubmit={handleOnSubmit}>
                <input type="text" name="todo" />
                <button>등록</button>
            </form>
            <ul>
                {todos.map((item) => (
                    <li key={item.id}>
                        {JSON.stringify(item.completed)}
                        <input type="checkbox" checked={item.completed} onChange={() => toggleTodo(item.id)} />
                        <span>
                            {item.id} / {item.todo}
                        </span>
                        <button onClick={() => deleteTodo(item.id)}>X</button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default App
