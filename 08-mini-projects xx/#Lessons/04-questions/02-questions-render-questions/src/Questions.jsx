import React from 'react'
import Question from './Question'

// (3a) extract
const Questions = ({ questions }) => {
  return (
    <section className='container'>
      <h1>Questions</h1>
      {questions.map((question) => {
        // (3b) pass
        return <Question key={question.id} {...question} />
      })}
    </section>
  )
}

export default Questions
