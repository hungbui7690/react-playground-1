/*
  SimpleGrid
  - <SimpleGrid> provides a friendly interface to create responsive grid layouts with ease.


*/

import { Box, SimpleGrid } from '@chakra-ui/react'

function App() {
  return (
    // 2 columns
    // Simply pass the <spacing> prop to change the row and column spacing between the grid items. SimpleGrid also allows you pass <spacingX> and <spacingY> to define the space between columns and rows respectively.
    <SimpleGrid columns={2} spacing={10}>
      <Box bg='tomato' height='80px'></Box>
      <Box bg='tomato' height='80px'></Box>
      <Box bg='tomato' height='80px'></Box>
      <Box bg='tomato' height='80px'></Box>
      <Box bg='tomato' height='80px'></Box>
    </SimpleGrid>
  )
}

export default App
