/*
  Tabs - Fetch Data
  - pic
  - Figma: https://www.figma.com/file/FJC19b9eUWS62HKR8L9Dmn/Tabs?node-id=0%3A1&t=8Rio02EFK1r9ItDW-1

  - In App.jsx, use the fetch API to get job information from an external API. Use the useEffect hook to make the API call when the component mounts. 
    > While the data is being fetched, set up a loading state that displays a message to the user.
    
  - Once the data has been fetched, store it in a state variable using the useState hook. 
    > This will allow you to modify the data and have those changes automatically reflected in the rendered output.

  *** when working with fetch data >> we need to have isLoading state

*/

import { useEffect } from 'react'
import { useState } from 'react'

const url = 'https://course-api.com/react-tabs-project'

const App = () => {
  const [isLoading, setIsLoading] = useState(true) // (1)
  const [jobs, setJobs] = useState([])

  // (2)
  const fetchJobs = async () => {
    try {
      const resp = await fetch(url)
      const data = await resp.json()
      console.log(data)

      setJobs(data) // *** auto batching: group and re-render at the same time
      setIsLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  // (3)
  useEffect(() => {
    fetchJobs()
  }, [])

  // (4)
  if (isLoading)
    return (
      <section className='jobs-center'>
        <div className='loading'></div>
      </section>
    )

  return <h2>Tabs Starter</h2>
}

export default App
