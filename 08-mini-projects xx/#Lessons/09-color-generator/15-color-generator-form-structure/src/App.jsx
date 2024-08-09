/*
  Color Generator - Form Structure
  - pic
  - Figma: https://www.figma.com/file/P2SJ5QGOZvi49EOpoVTvsT/Color-generator?node-id=0%3A1&t=ZY2gnIJ9zGTSXPW8-1

  - Setup: 
    > Create three components: Form, ColorList, and SingleColor.
    > In the App component, render the Form and ColorList components.

  - Form Component:
    > In the Form component, set up a color state value and a form with an two input fields (color and text). 
    > Set up a handleChange function to update the color state value and a handleSubmit function to add the color to the list.

*/

import ColorList from './ColorList'
import Form from './Form'

const App = () => {
  // (1) Form
  return (
    <main>
      <Form />
      <ColorList />
    </main>
  )
}
export default App
