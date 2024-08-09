import { Outlet } from 'react-router-dom' // (a)
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <>
      {/* (c) Navbar is shared to all pages */}
      <Navbar />
      <section className='section'>
        {/* (b) */}
        <Outlet />
      </section>
    </>
  )
}
export default Home
