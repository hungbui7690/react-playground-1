/*
  UseEffect Fundamentals
  - useEffect is a hook in React that allows you to perform <side-effects> in function components.
    -> There is no need for urban dictionary -> basically any work outside of the component. 
    -> Some examples of side effects are: subscriptions, fetching data, directly updating the DOM, event listeners, timers, etc.


***************************

  useEffect hook
  - accepts two arguments (second optional)
    -> 1st arg: cb function
    -> 2nd arg: dependency array
  - by default runs on each render (initial and re-render)
  - cb can't return promise (so can't make it async)
  - if dependency array empty [] runs only on initial render


***************************

  - we don't want to return promise from useEffect() 
    -> CANNOT DO THIS 

          useEffect(async () => {
            await ...
          })


    -> DO THIS:
          useEffect(() => {
            const func = <async> () => {
              <await> ...
            }
            func()
          })


*/

import { useState, useEffect } from 'react'

const UseEffectBasics = () => {
  const [value, setValue] = useState(0)

  const sayHello = () => {
    console.log('hello there')
  }

  // 1. run in every render
  // sayHello()

  // 2. No 2nd argument -> run at every re-render
  // useEffect(() => {
  //   console.log('>> hello from useEffect')
  // })

  // 3. With 2nd argument -> [] -> run at initial render
  useEffect(() => {
    console.log('hello from useEffect')
  }, [])

  return (
    <div>
      <h1>value : {value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        click me
      </button>
    </div>
  )
}
export default UseEffectBasics
