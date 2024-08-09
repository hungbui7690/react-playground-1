/*
  Code Example

    """ const [value, setValue] = useState(0)
    """ const sayHello = () => {
          setValue(value + 1); 
        }
    """ sayHello()

  - it will trigger infinite loop
    > initial render - setup state value and invoke sayHello
    > in the sayHello update state, trigger re-render

    > re-render - setup state value and invoke sayHello
    > in the sayHello update state, trigger re-render

    > repeat
    > repeat
    > repeat


  - but what about fetching data?
    > useEffect() will help us run this conditionally 

*/

import Starter from './01-code-example'
import './index.css'

function App() {
  return (
    <div className='container'>
      <Starter />
    </div>
  )
}

export default App
