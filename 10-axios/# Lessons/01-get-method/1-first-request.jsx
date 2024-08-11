/*
  Axios - GET Method
  - axios.get(url)
  - axios.post(url)
  - axios.put(url)
  - axios.patch(url)
  - axios.delete(url)


*****************************

  - axios(url) === axios.get(url) -> default


*****************************

  - returns a promise 
    -> need to use async/await or .then .catch
  - response data: response.data 
  - error: error.response


*****************************

  ~~ npm install axios


*****************************

  ✖ if error -> then add "www."
    -> from: const url='https://course-api.com/react-store-products'
    -> to:   const url='https://www.course-api.com/react-store-products'


*/

import { useEffect } from 'react'
import axios from 'axios'

// limit, if 429 wait for 15 min and try again
const url = 'https://www.course-api.com/react-store-products'

const FirstRequest = () => {
  const fetchData = async () => {
    try {
      // data is in "data" attribute
      const response = await axios(url) // or axios.get(url) (default is GET method)
      const data = response.data
      console.log(data)
    } catch (error) {
      console.log(error.response)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return <h2 className='text-center'>first request</h2>
}
export default FirstRequest
