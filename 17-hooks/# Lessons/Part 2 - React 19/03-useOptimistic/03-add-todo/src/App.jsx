/*
  Add Todo
  - backend -> we use setTimeout to simulate a delay of 3 seconds as we insert to DB
  - frontend -> it takes some time to update the UI


*/

import { useState, useEffect } from 'react'
import { getTodos, addTodo } from './utils'

function App() {
  const [todos, setTodos] = useState([])
  const [todoText, setTodoText] = useState('') // @

  useEffect(() => {
    const fetchTodos = async () => {
      const todos = await getTodos()
      setTodos(todos)
    }

    fetchTodos()
  }, [])

  // @
  const handleSubmit = async (e) => {
    e.preventDefault()
    const todo = await addTodo(todoText)
    setTodos([...todos, todo])
    setTodoText('')
  }

  return (
    <>
      <h1>Todos!</h1>

      {/* @ */}
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Add todo'
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.id} - {todo.text}
          </li>
        ))}
      </ul>
    </>
  )
}

// @
async function getTodos() {
  const res = await fetch('http://localhost:5000/api/todos')

  return await res.json()
}

// @
async function addTodo(text) {
  const res = await fetch('http://localhost:5000/api/todos', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text }),
  })

  if (!res.ok) throw new Error('Failed to add todo')

  return await res.json()
}

export default App
