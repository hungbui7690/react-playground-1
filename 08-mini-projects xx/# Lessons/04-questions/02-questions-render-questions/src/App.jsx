/*
  Questions - Render Question
  - pic >> requirement
  - Figma: https://www.figma.com/file/TAwJ3kWOqkw0o8UVtAMOHO/Accordion?node-id=0%3A1&t=1YEti8xBykw69tBH-1

  - Setup State Value: 
    > Next, set up the questions array as a state variable using the useState hook. This will allow you to modify the data and have those changes automatically reflected in the rendered output.
  - Review data.js and import the questions array from data.js into your project. This array should contain objects that represent the questions and their associated data, such as the question text

  - Render Questions: 
    > To display the list of questions, you can iterate over the questions array and render a SingleQuestion component for each item in the array. 
    > Each SingleQuestion component should display the question text in the header, along with a button to toggle the question text.

  - npm install react-icons --save
  - create Questions.jsx, Question.jsx

*/

import { useState } from 'react'
import data from './data' // (1)
import Questions from './Questions.jsx'

const App = () => {
  const [questions, setQuestions] = useState(data) // (2)

  // (3)
  return (
    <main>
      <Questions questions={questions} />
    </main>
  )
}
export default App
