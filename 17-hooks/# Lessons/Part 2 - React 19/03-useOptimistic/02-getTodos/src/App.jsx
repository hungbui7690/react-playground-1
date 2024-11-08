/*
  Get Todos


*/

import { useState, useEffect } from 'react'
import { getTodos } from './utils' // @

function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    // @
    const fetchTodos = async () => {
      const todos = await getTodos()
      setTodos(todos)
    }

    // @
    fetchTodos()
  }, [])

  return (
    <>
      <h1>Todos!</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
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

export default App
