/*
  Flex


*/

import { Box, Flex, Spacer } from '@chakra-ui/react'

function App() {
  return (
    <>
      {/* As an alternative to Stack, you can combine Flex and Spacer to create stackable and responsive layouts. */}
      <Flex>
        <Box p='4' bg='red.400'>
          Box 1
        </Box>
        <Spacer />
        <Box p='4' bg='green.400'>
          Box 2
        </Box>
      </Flex>
    </>
  )
}

export default App
