import Duties from './Duties'

// (3a)
const JobInfo = ({ jobs, currentItem }) => {
  const { company, dates, duties, title } = jobs[currentItem] // (3b) use currentItem here instead of hard code >> now everytime we click on button, it need to change

  return (
    <article className='job-info'>
      <h3>{title}</h3>
      <span className='job-company'>{company}</span>
      <p className='job-date'>{dates}</p>

      <Duties duties={duties} />
    </article>
  )
}

export default JobInfo
