/*
  Re-fetch Tours
  - Finally, you can implement a "re-fetch" functionality by adding a button or other user interface element that, when clicked, re-fetches the tours data from the URL and updates the state of the Tours component. 
    > You may also want to add a loading state again during the re-fetching process.

  - Overall, the flow of the application should look something like this:
    > App.jsx fetches tours data from a URL and sets the state of the Tours component to store the data.
    > The Tours component maps over the tours array and renders a Tour component for each tour.
    > Each Tour component has a "remove tour" button and a "read more" button.When the "remove tour" button is clicked, the Tours component updates its state to remove the tour from the tours array.
    > When the "read more" button is clicked, the Tour component updates its state to toggle a "read more" flag and conditionally renders the full description.
    > When the "re-fetch" button is clicked, the Tours component re-fetches the tours data from the URL and updates its state.

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
    setIsLoading(true) // (2)

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

  // (1)
  if (!tours.length) {
    return (
      <main>
        <div className='title'>
          <h2>No Tours Left</h2>
          <button
            style={{ marginTop: '1rem' }}
            className='btn delete-btn'
            onClick={fetchTours}
          >
            Refresh
          </button>
        </div>
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
