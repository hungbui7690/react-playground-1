/*
  Tabs - Display Jobs
  - Create a JobInfo component to display the first job in the list. 
    > Use object destructuring to extract the relevant data from the job object. 
    > Display the company, dates, title, and duties, using the Duties component to render the list of duties.

  - create JobInfo.jsx
  - create Duties.jsx

  *** click on the url to see the structure of data
        jobs = {
          id: string
          order: number
          title : string
          dates: string
          duties: string[]
          company : string
        }

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

  // (1) pass
  return (
    <section className='jobs-center'>
      {/* button container */}

      <JobInfo jobs={jobs} />
    </section>
  )
}

export default App
