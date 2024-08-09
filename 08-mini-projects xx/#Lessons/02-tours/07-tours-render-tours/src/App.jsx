/*
  Tours - Render Tours
  - Once the data is loaded, you can set the state of your component to store the tours data. 
    > You can then map over the tours array and render a Tour component for each tour. 
    > Each Tour component will receive the tour data as props, including the tour's id, image, info, name, and price.

*/

import { useState, useEffect } from 'react'
import Loading from './components/Loading'
import Tours from './components/Tours'
import './index.css'

const url = 'https://course-api.com/react-tours-project'

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [tours, setTours] = useState([])

  const fetchTours = async () => {
    try {
      const response = await fetch(url)
      const data = await response.json()

      console.log(data)
      setTours(data) // (1a)
    } catch (error) {
      console.log(error)
    }

    setIsLoading(false) // (1b)
  }

  useEffect(() => {
    fetchTours()
  }, [])

  if (isLoading) {
    // (2)
    return (
      <main>
        <Loading />
      </main>
    )
  }

  // (3) go to Tours.jsx
  return (
    <main>
      <Tours tours={tours} />
    </main>
  )
}

export default App
