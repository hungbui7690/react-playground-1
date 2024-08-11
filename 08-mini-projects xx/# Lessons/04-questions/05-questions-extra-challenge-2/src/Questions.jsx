import React from 'react'
import Question from './Question'

const Questions = ({ questions, activeID, toggleQuestion }) => {
  return (
    <section className='container'>
      <h1>Questions</h1>
      {questions.map((question) => {
        return (
          <Question
            key={question.id}
            {...question}
            activeID={activeID}
            toggleQuestion={toggleQuestion}
          />
        )
      })}
    </section>
  )
}

export default Questions
