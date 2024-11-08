/*
  useOptimistic
  - use either one of these: 
  ~~ npm install react@experimental react-dom@experimental
  ~~ npm install --save-exact react@rc react-dom@rc


-------------------------

  🌲 need to use form action


*/

import { useState, useEffect, useRef, useOptimistic } from 'react' // 1.

function App() {
  const [todos, setTodos] = useState([])
  const formRef = useRef(null)

  // 2.
  const [optimisticTodos, addOptimisticTodo] = useOptimistic(
    todos,
    (prevTodos, newTodo) => [...prevTodos, newTodo]
  )

  useEffect(() => {
    const fetchTodos = async () => {
      const todos = await getTodos()
      setTodos(todos)
    }

    fetchTodos()
  }, [])

  // 3. need to use formAction
  async function formAction(formData) {
    const todoText = formData.get('text')
    addOptimisticTodo({ id: new Date().getTime(), text: todoText }) // @ we will use temp id for update -> when we refresh the page -> will change to real id
    formRef.current.reset()

    // @ this takes time -> move to the end
    await addTodo(todoText)
  }

  return (
    <>
      <h1>Todos!</h1>
      {/* 4. formAction */}
      <form ref={formRef} action={formAction}>
        <input type='text' placeholder='Add todo' name='text' />
      </form>
      <ul>
        {/* 4. change to "optimisticTodos" */}
        {optimisticTodos.map((todo) => (
          <li key={todo.id}>
            {todo.id} - {todo.text}
          </li>
        ))}
      </ul>
    </>
  )
}

async function getTodos() {
  const res = await fetch('http://localhost:5000/api/todos')

  return await res.json()
}

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
