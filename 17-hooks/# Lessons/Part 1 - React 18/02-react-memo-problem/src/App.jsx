/*
  React Memo
  - Using memo will cause React to skip rendering a component if its props have not changed.
    -> This can improve performance.  


------------------------

  Problem
  - In this example, the Todos component re-renders even when the todos have not changed.
  - When you click the increment button, the Todos component re-renders.
  - If this component was complex, it could cause performance issues.



*/

import { useState } from 'react'
import Todos from './Todos'

function App() {
  const [count, setCount] = useState(0)
  const [todos, setTodos] = useState(['todo 1', 'todo 2'])
  console.log('parent render') // @

  const increment = () => {
    setCount((c) => c + 1)
  }

  return (
    <>
      <Todos todos={todos} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  )
}

export default App
