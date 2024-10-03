/*
  SimpleGrid
  - <SimpleGrid> provides a friendly interface to create responsive grid layouts with ease.

    const breakpoints = {
      base: '0em', // 0px
      sm: '30em', // ~480px. em is a relative unit and is dependant on the font size.
      md: '48em', // ~768px
      lg: '62em', // ~992px
      xl: '80em', // ~1280px
      '2xl': '96em', // ~1536px
    }


*/

import { Box, SimpleGrid } from '@chakra-ui/react'

function App() {
  return (
    // Passing `columns={[2, null, 3]}` and `columns={{sm: 2, md: 3}}` will have the same effect.
    <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing='40px'>
      <Box bg='tomato' height='80px'></Box>
      <Box bg='tomato' height='80px'></Box>
      <Box bg='tomato' height='80px'></Box>
      <Box bg='tomato' height='80px'></Box>
      <Box bg='tomato' height='80px'></Box>
    </SimpleGrid>
  )
}

export default App
