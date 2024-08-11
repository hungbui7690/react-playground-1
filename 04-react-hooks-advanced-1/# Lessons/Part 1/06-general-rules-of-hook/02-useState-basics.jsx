/*
  Initial Render and Re-Renders
  - In a React application, the initial render is the first time that the component tree is rendered to the DOM. 
    -> It happens when the application "first loads", or when the root component is first rendered. 
    -> This is also known as <mounting> the components.


*******************************

  - Re-renders, on the other hand, happen when the component's "state or props change", and the component needs to be updated in the DOM to reflect these changes. 
    -> React uses a virtual DOM to optimize the process of updating the actual DOM, so that only the necessary changes are made.


*******************************

  - There are a few ways that you can trigger a re-render in a React component:
    -> By changing the component's state or props. 
      ~~ When the component's state or props change, React will re-render the component to reflect these changes.
    -> When the "parent element re-renders", even if the component's state or props have not changed.


******************************

  General Rules of React Hooks
  - starts with "use" (both -react and custom hooks)
  - component must be uppercase
  - invoke inside function/component body
  - don't call hooks conditionally -> 4.
  - set functions don't update state immediately -> 5.


*/

import React, { useState } from 'react' // 1. import React

// useState('hello') // 3. DON'T DO THIS -> hook must be run inside component

const UseStateBasics = () => {
  const [count, setCount] = useState(0)
  const [name, setName] = React.useState('huron') // 2. another method

  // 4. DON'T DO THIS
  // if(false){
  //   const [age, setAge] = useState(19)
  // }

  const handleClick = () => {
    setCount(count + 1)
    console.log(count) // 5. set functions don't update state immediately
  }

  return (
    <div>
      <h4>You clicked {count} times</h4>
      <button className='btn' onClick={handleClick}>
        Click me
      </button>
    </div>
  )
}

export default UseStateBasics
