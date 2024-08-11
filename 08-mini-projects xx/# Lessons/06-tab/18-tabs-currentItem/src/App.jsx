/*
  Tabs - CurrentItem
  - Create a currentItem state variable in App.jsx and set it to 0 initially. 
    > Pass this state variable down to the JobInfo component as a prop, and use it to display the current job.

  - SetCurrentItem:
    > Attach the setCurrentItem function to each button.
      + When the user clicks a button, the setCurrentItem function should be called with the index of the selected job. 
      + This function should update the currentItem state variable, causing the JobInfo component to render the selected job.

  - Overall, the flow of the application should look something like this:
    - In App.jsx, use the fetch API to get job information from an external API, set up a loading state, and display a message to the user while the data is being fetched.
    - Once the data has been fetched, store it in a state variable using the useState hook.
    - Create a JobInfo component to display the first job in the list, using object destructuring to extract the relevant data from the job object.
    - Use the Duties component to render the list of duties for each job.
    - Use the uuid library to generate unique ids for each job, and use these ids instead of the index to set the key prop for the JobInfo and Duties components.
    - Create a currentItem state variable in App.jsx and pass it down to the JobInfo component as a prop, using it to display the current job.
    - Set up a BtnContainer component and pass the jobs array, currentItem state variable, and setCurrentItem function down as props.
    - In the BtnContainer component, create a button for each job in the jobs array, and attach the setCurrentItem function to each button to change the currentItem state variable and render the selected job.

  
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
