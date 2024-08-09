import { FaAngleDoubleRight } from 'react-icons/fa'
import { v4 as uuidv4 } from 'uuid'

// (1a)
const Duties = ({ duties }) => {
  return (
    <div>
      {duties.map((duty, index) => {
        const id = uuidv4() // (1b) this need to be placed inside the loop in order to generate diff id

        // (1c) we can cheat by using index as key >> but we can also use uuid
        return (
          <div key={id} className='job-desc'>
            <FaAngleDoubleRight className='job-icon' />
            <p>{duty}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Duties
