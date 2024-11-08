/*
  useOptimistic
  - use either one of these: 
  ~~ npm install react@experimental react-dom@experimental
  ~~ npm install --save-exact react@rc react-dom@rc


-------------------------

  🌲 need to use form action


*/

import {
  useState,
  useEffect,
  useRef,
  useOptimistic,
  useActionState,
} from 'react' // 1.

function App() {
  const [todos, setTodos] = useState([])
  const formRef = useRef(null)

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

  async function formAction() {
    const formData = new FormData(formRef.current)
    const todoText = formData.get('text')
    addOptimisticTodo({ id: new Date().getTime(), text: todoText })
    formRef.current.reset()

    await addTodo(todoText)
  }

  const [state, addNewTodoWithState, isPending] = useActionState(
    formAction,
    null
  )

  return (
    <>
      <h1>Todos!</h1>
      <form ref={formRef} action={addNewTodoWithState}>
        <input type='text' placeholder='Add todo' name='text' />
      </form>
      <ul>
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
