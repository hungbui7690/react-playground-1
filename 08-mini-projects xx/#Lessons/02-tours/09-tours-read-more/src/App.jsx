/*
  Read More
  - To implement the "read more" functionality, you can add a button to each Tour component that, when clicked, expands the description of the tour. 
    > You can achieve this by updating the state of the Tour component to toggle a "read more" flag, and conditionally rendering the full description based on the flag.

    (1) Tour.jsx


  - think about this <p><button></button></p>
        <p>
          {isReadMore ? info : `${info.substring(0, 170)}...`}
          <button
            type='button'
            className='info-btn'
            onClick={() => setIsReadMore(!isReadMore)}
          >
            {isReadMore ? 'Show Less' : 'Read More'}
          </button>
        </p> 

*/

import { useState, useEffect } from 'react'
import Loading from './components/Loading'
import Tours from './components/Tours'
import './index.css'

const url = 'https://course-api.com/react-tours-project'

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [tours, setTours] = useState([])

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }

  const fetchTours = async () => {
    try {
      const response = await fetch(url)
      const data = await response.json()

      setTours(data)
    } catch (error) {
      console.log(error)
    }

    setIsLoading(false)
  }

  useEffect(() => {
    fetchTours()
  }, [])

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  )
}

export default App
