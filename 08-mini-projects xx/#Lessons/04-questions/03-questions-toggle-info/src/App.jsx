/*
  Toggle Question
  - In the SingleQuestion component, you can set up the functionality for the toggle button by defining a function that toggles the state of a "showInfo" flag. 
    > When the flag is set to true, the answer text will be displayed. 
    > When the flag is set to false, only the question text will be displayed.


*/

import { useState } from 'react'
import data from './data'
import Questions from './Questions.jsx'

const App = () => {
  const [questions, setQuestions] = useState(data)

  return (
    <main>
      <Questions questions={questions} />
    </main>
  )
}
export default App
