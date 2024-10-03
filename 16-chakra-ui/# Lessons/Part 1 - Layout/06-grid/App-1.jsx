/*
  Grid
  - Grid is a layout for managing grid layouts
    # Grid: The main wrapper with display: grid.
    # GridItem: Used as a child of Grid to control the span, and start positions within the grid.


\\\\\\\\\\\\\\\\\\\\\\\\\\\

  Template Columns


*/

import { Grid, GridItem } from '@chakra-ui/react'

function App() {
  return (
    <Grid templateColumns='repeat(5, 1fr)' gap={6}>
      <GridItem w='100%' h='10' bg='blue.500' />
      <GridItem w='100%' h='10' bg='blue.500' />
      <GridItem w='100%' h='10' bg='blue.500' />
      <GridItem w='100%' h='10' bg='blue.500' />
      <GridItem w='100%' h='10' bg='blue.500' />
    </Grid>
  )
}

export default App
