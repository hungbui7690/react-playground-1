/*
  FormData API
  > The FormData interface provides a way to construct a set of key/value pairs representing form fields and their values, which can be sent using the fetch() or XMLHttpRequest.send() method. 
  > It uses the same format a form would use if the encoding type were set to "multipart/form-data".

  *** The Object.fromEntries() static method transforms a list of key-value pairs into an object.

  *** reset(): 
      > The reset() method is a built-in method in HTML that can be used to reset all form controls to their initial values. 
      > When this method is called on a form element, it will clear any user-entered data and reset the values of all form elements to their default values.

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
