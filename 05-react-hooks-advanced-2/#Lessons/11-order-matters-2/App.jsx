/*
  Order Matters

*/

import Starter from './02-multiple-returns-fetch-data'
import './index.css'

/////////////////////////
// start here: vanilla js
/////////////////////////
const someObject = {
  name: 'jo koy',
}
// # this is cool
someObject.name // 'jo koy'
someObject.propertyThatDoesNotExist // undefined

// # not cool at all, javascript will scream, yell and complain
const randomValue = null
randomValue.name // Cannot read properties of null (reading 'name')

// # this is ok
const randomList = []
console.log(randomList[0]) // undefined

// # not cool at all, javascript will scream, yell and complain
console.log(randomList[0].name) // err

function App() {
  return (
    <div className='container'>
      <Starter />
    </div>
  )
}

export default App
