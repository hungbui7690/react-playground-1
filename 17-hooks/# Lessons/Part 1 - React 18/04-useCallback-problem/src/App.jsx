/*
  useCallback
  - returns a memoized callback <function>.
  - Think of memoization as caching a value so that it does not need to be recalculated.
  - This allows us to isolate resource intensive functions so that they will not automatically run on every render.
  - The useCallback Hook only runs when one of its dependencies update.
    -> This can improve performance.


  🍉 The useCallback and useMemo Hooks are similar. 
    -> <useMemo> returns a memoized <value> 
    -> <useCallback> returns a memoized <function>


\\\\\\\\\\\\\\\\\\\\\\\\\\

  Problem
  - One reason to use useCallback is to prevent a component from re-rendering unless its props have changed.
  - In this example, you might think that the Todos component will not re-render unless the todos change:


------------------------

  - Try running this and click the count increment button.
  - You will notice that the Todos component re-renders even when the todos do not change.
  - Why does this not work? We are using memo, so the Todos component should not re-render since neither the todos state nor the addTodo function are changing when the count is incremented.



*/

import { useState } from 'react'
import Todos from './Todos'

function App() {
  const [count, setCount] = useState(0)
  const [todos, setTodos] = useState([])
  console.log('parent render')

  const increment = () => {
    setCount((c) => c + 1)
  }

  // @ everytime App re-renders -> this function will recreated with new reference -> since we pass addTodo as a prop -> it will re-render todos component
  const addTodo = () => {
    setTodos((t) => [...t, 'New Todo'])
  }

  return (
    <>
      {/* @ the different to previous example is here -> addTodo */}
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
