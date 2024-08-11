/*
  Interceptors
  - global and custom


***************************

  1. create axios/interceptors


*/

import { useEffect } from 'react'
import authFetch from './axios/interceptors' // 2.

const Interceptors = () => {
  const fetchData = async () => {
    try {
      const resp = await authFetch('/react-store-productss') // 3.
    } catch (error) {}
  }

  useEffect(() => {
    fetchData()
  }, [])

  return <h2 className='text-center'>interceptors</h2>
}
export default Interceptors
