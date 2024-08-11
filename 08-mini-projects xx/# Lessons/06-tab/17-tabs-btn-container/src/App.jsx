/*
  Tabs - BtnContainer
  - Set up a BtnContainer component and pass the jobs array, currentItem state variable, and setCurrentItem function down as props. 
    > In the BtnContainer component, create a button for each job in the jobs array,


  - create BtnContainer.jsx


*/

import { useEffect } from 'react'
import { useState } from 'react'
import JobInfo from './JobInfo'
import ButtonContainer from './BtnContainer'

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
      {/* (1) button container */}
      <ButtonContainer jobs={jobs} />

      <JobInfo jobs={jobs} />
    </section>
  )
}

export default App
