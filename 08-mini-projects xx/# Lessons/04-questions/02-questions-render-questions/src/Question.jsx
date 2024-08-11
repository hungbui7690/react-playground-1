import { useState } from 'react'

// (4a) extract
const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false) // (4b) it is similar to ReadMore/ShowLess

  // (4c)
  return (
    <article className='question'>
      <header>
        <h5>{title}</h5>
      </header>
      <p>{info}</p>
    </article>
  )
}

export default Question
