/*
  FormData API
  *** check coding/javascript/nuggets-smilga for more info about Form Data API

  - we can submit the form with "uncontrolled inputs" >> it means that we don't need to ref to the states
    > we can do this in 2 ways: 
      + Form Data API (this lesson)
      + useRef hook (next lessons)

  - a great solution when you have bunch of inputs
  - inputs must have name attribute

    >> The FormData interface provides a way to construct a set of key/value pairs representing form fields and their values, which can be sent using the fetch() or XMLHttpRequest.send() method. 
    >> It uses the same format a form would use if the encoding type were set to "multipart/form-data".

  - e.currentTarget: 
    > In React, e.currentTarget returns the DOM element that triggered the event.
    
    *** if we use onSubmit >> e.currentTarget always point to the form


*/

import Starter from './05-form-data'

const App = () => {
  return (
    <main>
      <Starter />
    </main>
  )
}
export default App
