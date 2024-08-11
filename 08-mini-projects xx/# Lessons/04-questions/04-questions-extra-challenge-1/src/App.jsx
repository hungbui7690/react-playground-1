/*
  Extra Challenge
  - To set up the functionality where "only one question is displayed at a time", you can modify the state of the questions array to keep track of the currently selected question. 
    > You can do this by defining a function that updates the state to reflect the selected question index. 
    > Then, you can use the selected question index to render only the SingleQuestion component that corresponds to the currently selected question.

  - Overall, the flow of the application should look something like this:
    > Import the questions array from data.js into your project.
    > Set up the questions array as a state variable using the useState hook.
    > Iterate over the questions array and render a SingleQuestion component for each item in the array.
    > In the SingleQuestion component, display the question text in the header and a button to toggle the question text.
    > Define a function that toggles the state of a "showAnswer" flag, which determines whether the answer text is displayed or not.
    > Modify the state of the questions array to keep track of the currently selected question index.
    > Define a function that updates the state to reflect the selected question index.
    > Use the selected question index to render only the SingleQuestion component that corresponds to the currently selected question.


  *** now, click on different question, it will close the previous one 
      >> but the problem now is we cannot close question

*/

import { useState } from 'react'
import data from './data'
import Questions from './Questions.jsx'

const App = () => {
  const [questions, setQuestions] = useState(data)
  const [activeID, setActiveID] = useState(null) // (1)

  // (2)
  const toggleQuestion = (id) => {
    console.log(id)
    setActiveID(id)
  }

  // (3) pass
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
