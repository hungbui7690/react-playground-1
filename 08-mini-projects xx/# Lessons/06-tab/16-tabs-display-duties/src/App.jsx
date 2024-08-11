/*
  Tabs - Display Duties
  - In the Duties component, iterate over the array of duties and render each item. If you want to use icons, you will need to install the react-icons library.

  - Since the <job data does not have an id>, you can install the uuid library to generate unique ids for each job. Use these ids instead of the index to set the key prop for the JobInfo and Duties components.

  - UUID Library
    > npm install uuid
      + import { v4 as uuidv4 } from 'uuid'

  *** click on the url to see the structure of data
        jobs = {
          id: string
          order: number
          title : string
          dates: string
          duties: string[]
          company : string
        }

  *** another id package is "nanoid" 
      > but uuid is most popular

    (1) Duties.jsx

*/

import { useEffect } from 'react'
import { useState } from 'react'
import JobInfo from './JobInfo'

const url = 'https://course-api.com/react-tabs-project'

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [jobs, setJobs] = useState([])

  const fetchJobs = async () => {
    try {
      const resp = await fetch(url)
      const data = await resp.json()
      console.log(data)

      setJobs(data)
      setIsLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchJobs()
  }, [])

  if (isLoading)
    return (
      <section className='jobs-center'>
        <div className='loading'></div>
      </section>
    )

  return (
    <section className='jobs-center'>
      {/* button container */}

      <JobInfo jobs={jobs} />
    </section>
  )
}

export default App
