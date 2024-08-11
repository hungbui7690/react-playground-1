import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <section className='section'>
        <Outlet />
      </section>
    </>
  )
}
export default SharedLayout // 2. App.js
