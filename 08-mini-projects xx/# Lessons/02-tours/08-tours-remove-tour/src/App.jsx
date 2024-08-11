/*
  Tours - Remove Tour
  - To implement the "remove tour" functionality, you can add a button to each Tour component that, when clicked, removes the tour from the list of tours. 
    > You can achieve this by updating the state of the Tours component to remove the tour from the tours array.

  ***
  - create removeTour() in App.js 
    > then pass to Tours >> then Tour
  - why do we create here >>> because we can access to tours state >> then use filter() and setTours()


*/

import { useState, useEffect } from 'react'
import Loading from './components/Loading'
import Tours from './components/Tours'
import './index.css'

const url = 'https://course-api.com/react-tours-project'

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [tours, setTours] = useState([])

  // (1) why we need to place this function here >> just because we want to access to all the tours in order to use filter()
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours) // *** don't return newTours >> we need to think in React >> use set function
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

  // (2) pass
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  )
}

export default App
