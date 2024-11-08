/*
  React Memo
  - export default memo(Todos)
    -> Now the Todos component only re-renders when the <todos> that are passed to it through props are updated.


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
