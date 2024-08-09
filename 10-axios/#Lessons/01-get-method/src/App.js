/*
  Axios - GET Method
  - not part of React

  - axios.get(url)
  - axios.post(url)
  - axios.patch/put(url)
  - axios.delete(url)

  - default: get axios(url)

  - returns a promise 
    > need to use async/await or .then() .catch()
  - response data: response.data 
  - error: error.response

  - npm install axios
  - JS: <script src='https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js'></script>


  *** sometimes, if there's err, then change
  - from: const url='https://course-api.com/react-store-products'
  - to:   const url='https://www.course-api.com/react-store-products'
  >> add "www."
*/

import Title from './components/Title'
import Setup from './1-first-request'

function App() {
  return (
    <main>
      <Title />
      <Setup />
    </main>
  )
}

export default App
