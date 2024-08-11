import { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

// (5a)
const Question = ({ id, title, info, activeID, toggleQuestion }) => {
  // const [showInfo, setShowInfo] = useState(false) // *** remove

  const isActive = id === activeID // (5b)

  return (
    <article className='question'>
      <header>
        <h5>{title}</h5>
        <button
          className='question-btn'
          onClick={() => toggleQuestion(id)} // (5e)
        >
          {/* (5d) */}
          {isActive ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>

      {/* (5c) */}
      {isActive && <p>{info}</p>}
    </article>
  )
}

export default Question
