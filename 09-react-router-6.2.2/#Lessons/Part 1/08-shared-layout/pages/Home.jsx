import { Outlet } from 'react-router-dom' // 2.
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <>
      {/* 3. Navbar is shared to all pages */}
      <Navbar />
      <section className='section'>
        {/* 4. this is the content of the other pages -> Products / About component */}
        <Outlet />
      </section>
    </>
  )
}
export default Home
