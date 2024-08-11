/*
  Tours - Fetch Tours
  - The Tours component will be responsible for rendering a list of Tour components.  
    > In App.jsx, you will fetch the tours data from a URL using the fetch API. 
    > Before the data is loaded, you should show a loading spinner or message, which can be implemented using the Loading component.

*/

import { useState, useEffect } from 'react'
import './index.css'

const url = 'https://course-api.com/react-tours-project'

const App = () => {
  const [isLoading, setIsLoading] = useState(true) // (1)
  const [tours, setTours] = useState([])

  // (2)
  const fetchTours = async () => {
    try {
      const response = await fetch(url)
      const data = await response.json()

      console.log(data) // ***
    } catch (error) {
      console.log(error)
    }
  }

  // (3)
  useEffect(() => {
    fetchTours()
  }, [])

  return <h2>Tours Starter</h2>
}
export default App
