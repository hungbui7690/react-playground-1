/*
  Global Instance

*******************************

  1. create axios/global.js
  2. App.jsx


*******************************

  - test -> Network tab -> Request Headers

*/

import { useEffect } from 'react'
import axios from 'axios'

const productsUrl = 'https://www.course-api.com/react-store-products'
const randomUserUrl = 'https://randomuser.me/api'

const GlobalInstance = () => {
  const fetchData = async () => {
    const res1 = await axios(productsUrl)
    const res2 = await axios(randomUserUrl)
    console.log(res1)
    console.log(res2)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return <h2 className='text-center'>global instance</h2>
}
export default GlobalInstance
