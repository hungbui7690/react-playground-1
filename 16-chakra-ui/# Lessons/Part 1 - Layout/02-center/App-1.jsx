/*
  Center
  - <Center> is a layout component that centers its child within itself.
    # Center: centers its child given width and height
    # Square: centers its child given size (width and height)
    # Circle: a Square with round border-radius
    # AbsoluteCenter: centers relative to its parent by given axis



*/

import { Center } from '@chakra-ui/react'

function App() {
  return (
    // Put any child element inside it, give it any width or/and height, it'll ensure the child is centered.
    <Center bg='tomato' h='100px' color='white'>
      This is the Center
    </Center>
  )
}

export default App
