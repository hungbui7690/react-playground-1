/*
  Wrap
  - Wrap is a layout component used to add space between elements and wraps automatically if there isn't enough space.
    # Wrap: Wrap composes the Box component and renders a <ul> tag
    # WrapItem: WrapItem composes the Box component and renders the HTML <li> tag


*/

import { Center, Wrap, WrapItem } from '@chakra-ui/react'

function App() {
  return (
    // Pass the <spacing> prop to apply consistent spacing between each child, even if it wraps.
    // Pass the <align> prop to change the alignment of the child along the cross axis.
    // Pass the <justify> prop to change the alignment of the child along the main axis.
    <Wrap spacing='1rem' align='center' justify='center'>
      <WrapItem>
        <Center w='180px' h='80px' bg='red.200'>
          Box 1
        </Center>
      </WrapItem>
      <WrapItem>
        <Center w='180px' h='80px' bg='green.200'>
          Box 2
        </Center>
      </WrapItem>
      <WrapItem>
        <Center w='180px' h='80px' bg='tomato'>
          Box 3
        </Center>
      </WrapItem>
      <WrapItem>
        <Center w='180px' h='80px' bg='blue.200'>
          Box 4
        </Center>
      </WrapItem>
    </Wrap>
  )
}

export default App
