/*
  Fetch Error Gotcha
  - Unlike for example Axios, by default, the fetch() API does not consider HTTP status codes in the 4xx or 5xx range to be errors. 
    > Instead, it considers these status codes to be indicative of a successful request

*/

import Starter from './02-multiple-returns-fetch-data'
import './index.css'

function App() {
  return (
    <div className='container'>
      <Starter />
    </div>
  )
}

export default App
