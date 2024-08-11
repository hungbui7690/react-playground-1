import './index.css'

// Vanilla JS
const sayHello = (name) => {
  if (name) {
    return `Hello, ${name}` // exit the function, skip rest of the code
  }

  return 'Hello, there' // so if name provided, won't get to this line
}

const firstResp = sayHello('john')
console.log(firstResp) // Hello, john
const secondResp = sayHello()
console.log(secondResp) // Hello, there

function App() {
  return (
    <div className='container'>
      <Starter />
    </div>
  )
}

export default App
