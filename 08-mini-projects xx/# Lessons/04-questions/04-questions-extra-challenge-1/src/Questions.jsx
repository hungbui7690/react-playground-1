import React from 'react'
import Question from './Question'

// (4a)
const Questions = ({ questions, activeID, toggleQuestion }) => {
  return (
    <section className='container'>
      <h1>Questions</h1>
      {questions.map((question) => {
        return (
          <Question
            key={question.id}
            {...question}
            activeID={activeID} // (4b) pass
            toggleQuestion={toggleQuestion}
          />
        )
      })}
    </section>
  )
}

export default Questions
