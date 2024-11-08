/*
  useCallback
  - To fix this, we can use the useCallback hook to prevent the function from being recreated unless necessary.


*/

import { useCallback, useState } from 'react'
import Todos from './Todos'

function App() {
  const [count, setCount] = useState(0)
  const [todos, setTodos] = useState([])
  console.log('parent render')

  const increment = () => {
    setCount((c) => c + 1)
  }

  // @ add useCallback
  const addTodo = useCallback(() => {
    setTodos((todos) => [...todos, 'New Todo'])
  }, [])

  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  )
}

export default App
