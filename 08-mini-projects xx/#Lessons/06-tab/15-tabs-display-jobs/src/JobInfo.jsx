import Duties from './Duties'

// (2a)
const JobInfo = ({ jobs }) => {
  const { company, dates, duties, title } = jobs[0] // (2b) array >> need to have index

  // (2c)
  return (
    <article className='job-info'>
      <h3>{title}</h3>
      <span className='job-company'>{company}</span>
      <p className='job-date'>{dates}</p>

      {/* (2d) pass to Duties component */}
      <Duties duties={duties} />
    </article>
  )
}

export default JobInfo
