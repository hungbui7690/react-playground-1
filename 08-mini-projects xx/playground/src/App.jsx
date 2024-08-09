/*
  Tabs - CurrentItem
  - Create a currentItem state variable in App.jsx and set it to 0 initially. 
    > Pass this state variable down to the JobInfo component as a prop, and use it to display the current job.

*/

import { useEffect } from 'react'
import { useState } from 'react'
import JobInfo from './JobInfo'
import ButtonContainer from './BtnContainer'

const url = 'https://course-api.com/react-tabs-project'

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [currentItem, setCurrentItem] = useState(0) // (1)

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
      {/* (2b) */}
      <ButtonContainer
        jobs={jobs}
        currentItem={currentItem} // *** this is for the active tab
        setCurrentItem={setCurrentItem}
      />

      {/* (2a) */}
      <JobInfo jobs={jobs} currentItem={currentItem} />
    </section>
  )
}

export default App
