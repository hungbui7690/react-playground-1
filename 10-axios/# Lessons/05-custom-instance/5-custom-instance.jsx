import { useEffect } from 'react'
import axios from 'axios'
import { authFetch } from './axios/custom' // 2.

const randomUserUrl = 'https://randomuser.me/api'

const CustomInstance = () => {
  const fetchData = async () => {
    // 3.
    const res1 = await authFetch('/react-store-products') // authFetch -> we don't have to provide the entire url
    const res2 = await axios.get(randomUserUrl) // axios -> not authFetch -> test in Network tab
  }

  useEffect(() => {
    fetchData()
  }, [])

  return <h2 className='text-center'>custom instance</h2>
}
export default CustomInstance
