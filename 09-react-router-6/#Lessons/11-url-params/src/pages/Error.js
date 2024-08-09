import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className='section'>
      <h2>Error</h2>
      <p>Page not found</p>
      <Link to='/'>Back to Home</Link>{' '}
    </section>
  )
}
export default Error
