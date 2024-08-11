/*
  JSX Rules
  - return single element (one parent element)


*******************************

  - semantics section/article
    + since sometimes, we have div nested into another div -> that will create confusion -> use semantics markup (header, section, article...)
    + or we can use Fragment - let's us group elements without adding extra nodes
    => <React.Fragment> or <>


*******************************

  - need to use camel case for attribute in React
    return (
      <div tabIndex={1}>
        <button onClick={myFunction}>click me</button>
        <label htmlFor='name'>Name</label>
        <input readOnly={true} id='name' />
      </div>
    )

  - in html we don't have to use camel case -> but in react, that's a must
      <div tabindex="1">
          <button onclick="myFunction()">click me</button>
          <label for='name'>Name</label>
          <input readonly id='name' />
      </div>    


*******************************

  - className instead of class -> in react, we have keyword "class" -> must use "className" instead of "class"
    -> return <div className='someValue'>hello</div>;


*******************************

  - close every element
      return <img />;
      return <input />;
      -> in html, input tag does not have closing tag, but in react, we have to


*******************************

  - opening tag in the same line as return or <(>
    -> check the component below


*/

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

function Greeting() {
  return (
    <>
      <div className='someValue'>
        <h3>hello people</h3>
        <ul>
          <li>Hello World</li>
        </ul>
      </div>
      <h2>Hi there</h2>
      <input type='text' name='' id='' />
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Greeting />
  </StrictMode>
)
