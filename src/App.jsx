import { useState } from 'react'

function App() {
    const [todos, setTodos] = useState(['할일1', '할일2', '할일3'])

    const handleOnSubmit = (e) => {
        e.preventDefault() // 새로고침을 사전에 방지하는 것
        const form = e.target
        if (form.todo.value.length == 0) {
            alert('할 일을 입력해 주세요!')
            return
        }
        setTodos([...todos, form.todo.value])
    }

    return (
        <>
            <form onSubmit={handleOnSubmit}>
                <input type="text" name="todo" />
                <button>등록</button>
            </form>
            <ul>
                {todos.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
        </>
    )
}

export default App
