/*
  useMemo
  - The React useMemo Hook returns a memoized <value>.
  - Think of memoization as caching a value so that it does not need to be recalculated.
  - The useMemo Hook only runs when one of its dependencies update.
    -> This can improve performance.

  🌲 The useMemo and useCallback Hooks are similar. 
    -> <useMemo> returns a memoized <value>
    -> <useCallback> returns a memoized <function>


*/

import { useState } from 'react'

// @ A poor performing function. The expensiveCalculation function runs on every render
const expensiveCalculation = (num) => {
  console.log('Calculating...')
  for (let i = 0; i < 1000000000; i++) {
    num += 1
  }
  return num
}

function App() {
  const [count, setCount] = useState(0)
  const [todos, setTodos] = useState([])
  const calculation = expensiveCalculation(count) // @

  const increment = () => {
    setCount((c) => c + 1)
  }
  const addTodo = () => {
    setTodos((t) => [...t, 'New Todo'])
  }

  return (
    <div>
      <div>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>
        })}
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>
    </div>
  )
}

export default App
