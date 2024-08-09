/*
  Color Generator - HTML Color Input
  - HTML Color Input: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color

    (1) Form

  *** <input type="color">

*/

import ColorList from './ColorList'
import Form from './Form'

const App = () => {
  return (
    <main>
      <Form />
      <ColorList />
    </main>
  )
}
export default App
