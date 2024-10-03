/*
  Responsive direction
  - You can pass responsive values to the Stack component to change stack direction and/or spacing between elements.


*/

import { Box, Stack } from '@chakra-ui/react'

function App() {
  return (
    // sm = column -> md = row
    <Stack direction={['column', 'row']} spacing='24px'>
      <Box w='40px' h='40px' bg='yellow.200'>
        1
      </Box>
      <Box w='40px' h='40px' bg='tomato'>
        2
      </Box>
      <Box w='40px' h='40px' bg='pink.100'>
        3
      </Box>
    </Stack>
  )
}

export default App
