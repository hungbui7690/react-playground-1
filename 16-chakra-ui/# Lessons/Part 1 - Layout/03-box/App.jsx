/*
  Setup 
  - https://v2.chakra-ui.com/getting-started/vite-guide
    ~~ npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion


\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  Box 
  - similar to <div>
  - You can use the <as> prop to change the element render, just like styled-components.
  - props: 
    - bg
    - w
    - p
    - color
    - as


*/

import { Box } from '@chakra-ui/react'

function App() {
  return (
    <div>
      <Box
        width='100%'
        py={12}
        bgImage="url('https://bit.ly/2Z4KKcF')"
        bgPosition='center'
        bgRepeat='no-repeat'
        color='white'
        mb={2}
      >
        This is the Box
      </Box>
      <Box as='button' borderRadius='md' bg='tomato' color='white' px={4} h={8}>
        Button
      </Box>
    </div>
  )
}

export default App
