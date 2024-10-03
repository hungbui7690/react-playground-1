/*
  Stack
  - Stack is a layout component used to group elements together and apply a space between them.
    # VStack: used to stack elements in the vertical direction
    # HStack: used to stack elements in the horizontal direction
    # Stack: used to stack elements in the vertical or horizontal direction



*/

import { HStack, Box } from '@chakra-ui/react'

function App() {
  return (
    // To stack elements in horizontal or vertical direction only, use the <HStack> or <VStack> components. You can also use the <Stack> component as well and pass the <direction> prop.
    <HStack spacing='24px'>
      <Box w='40px' h='40px' bg='yellow.200'>
        1
      </Box>
      <Box w='40px' h='40px' bg='tomato'>
        2
      </Box>
      <Box w='40px' h='40px' bg='pink.100'>
        3
      </Box>
    </HStack>
  )
}

export default App
