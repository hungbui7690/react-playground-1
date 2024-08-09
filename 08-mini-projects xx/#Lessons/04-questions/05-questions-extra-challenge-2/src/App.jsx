/*
  Extra Challenge

*/

import { useState } from 'react'
import data from './data'
import Questions from './Questions.jsx'

const App = () => {
  const [questions, setQuestions] = useState(data)
  const [activeID, setActiveID] = useState(null)

  const toggleQuestion = (id) => {
    const newActiveID = id === activeID ? null : id // *** if we click on the same question >> then close
    setActiveID(newActiveID)
  }

  return (
    <main>
      <Questions
        questions={questions}
        activeID={activeID}
        toggleQuestion={toggleQuestion}
      />
    </main>
  )
}
export default App
