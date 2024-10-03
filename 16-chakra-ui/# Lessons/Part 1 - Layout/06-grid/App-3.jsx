/*
  Starting and ending lines
  - Pass the colStart and colEnd prop to GridItem component to make an element start or end at the nth grid position.
  - Starts from 1 and Ends at 6


*/

import { Grid, GridItem } from '@chakra-ui/react'

function App() {
  return (
    <Grid templateColumns='repeat(5, 1fr)' gap={4}>
      <GridItem colSpan={2} h='10' bg='tomato' />
      <GridItem colStart={4} colEnd={6} h='10' bg='papayawhip' />
    </Grid>
  )
}

export default App
