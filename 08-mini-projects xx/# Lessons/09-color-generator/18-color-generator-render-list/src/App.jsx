/*
  Color Generator - Render Colors
  - Pass the colors list to the ColorList component.

  - In the ColorList component, iterate over the list of colors and render each one in a SingleColor component. 
    > Fix the key problem by providing a unique id for each color.

  - In the SingleColor component, display the hex value and weight (percent) of each color, and use inline CSS to set the background color of the component.

  *** colors state can be placed at ColorList or at the App 
      > but if we place it at the App, we can use props drilling to pass to ColorList component

  *** nanoid: generate id

  *** color: {  alpha: 1, 
                rgb: [254, 238, 233], 
                type: "tint", 
                weight: 90, 
                hex: "feeee9"
              }

*/

import { useState } from 'react'
import ColorList from './ColorList'
import Form from './Form'
import Values from 'values.js'

const App = () => {
  const [colors, setColors] = useState(new Values('#f15025').all(10))

  console.log(colors)

  // (1) pass
  return (
    <main>
      <Form />
      <ColorList colors={colors} />
    </main>
  )
}
export default App
