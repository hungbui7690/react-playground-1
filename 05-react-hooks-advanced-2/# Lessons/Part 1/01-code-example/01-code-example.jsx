/*
  Code Example


*****************************

  1.  const [value, setValue] = useState(0)
  2.  const sayHello = () => {
        setValue(value + 1); 
      }
  3.  sayHello()

  -> for every render -> 2. -> this function will be created from scratch 
  -> when we deal with React.memo (part 4) -> we will meet this one again


*****************************

  - it will trigger infinite loop
    -> initial render - setup state value and invoke sayHello
    -> in the sayHello update state, trigger re-render

    -> re-render - setup state value and invoke sayHello
    -> in the sayHello update state, trigger re-render

    ...
    -> repeat
    -> repeat
    -> repeat


*****************************

  - but what about fetching data?
    -> useEffect() will help us run this conditionally 


*/

import { useState } from 'react'

const ComponentExample = () => {
  const [value, setValue] = useState(0)

  const sayHello = () => {
    console.log('hello there')
    // setValue(value + 1); // Be Careful -> trigger infinite loop
  }

  sayHello() // this will be run in every render

  return (
    <div>
      <h1>value : {value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        click me
      </button>
    </div>
  )
}
export default ComponentExample
