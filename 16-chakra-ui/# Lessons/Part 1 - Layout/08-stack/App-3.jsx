/*
  Stack Dividers
  - In some scenarios, you may want to add dividers between stacked elements. Pass the divider prop and set its value to the StackDivider or any custom React element.



*/

import { Box, StackDivider, VStack } from '@chakra-ui/react'

function App() {
  return (
    <VStack
      divider={<StackDivider borderColor='gray.200' />}
      spacing={4}
      align='stretch'
    >
      <Box h='40px' bg='yellow.200'>
        1
      </Box>
      <Box h='40px' bg='tomato'>
        2
      </Box>
      <Box h='40px' bg='pink.100'>
        3
      </Box>
    </VStack>
  )
}

export default App
