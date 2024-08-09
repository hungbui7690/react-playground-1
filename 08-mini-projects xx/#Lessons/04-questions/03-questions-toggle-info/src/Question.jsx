import { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai' // (1)

const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false) // *** we don't need to place at the App.jsx >> because we don't need to pass data from App.jsx to here

  return (
    <article className='question'>
      <header>
        <h5>{title}</h5>

        {/* (3) react dev tools */}
        <button className='question-btn' onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>

      {/* (2) */}
      {showInfo && <p>{info}</p>}
    </article>
  )
}

export default Question
