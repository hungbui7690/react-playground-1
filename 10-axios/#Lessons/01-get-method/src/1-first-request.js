import { useEffect } from 'react'
import axios from 'axios' // (1)

// *** can change url to test 404 error
const url = 'https://www.course-api.com/react-store-products' // limit, if 429 wait for 15 min and try again

const FirstRequest = () => {
  // (2)
  const fetchData = async () => {
    try {
      // data is in "data" attribute
      const response = await axios.get(url) // or axios.get(url) (default is GET method)
      const data = response.data
      console.log(data)
    } catch (error) {
      console.log(error.response)
    }
  }

  useEffect(() => {
    fetchData() // (3)
  }, [])

  return <h2 className='text-center'>first request</h2>
}
export default FirstRequest
