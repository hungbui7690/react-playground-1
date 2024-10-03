/*
  Spanning columns#
  - In some layouts, you may need certain grid items to span specific amount of columns or rows instead of an even distribution. To achieve this, you need to pass the colSpan prop to the GridItem component to span across columns and also pass the rowSpan component to span across rows. You also need to specify the templateColumns and templateRows.


*/

import { Grid, GridItem } from '@chakra-ui/react'

function App() {
  return (
    <Grid
      h='200px'
      templateRows='repeat(2, 1fr)'
      templateColumns='repeat(5, 1fr)'
      gap={4}
    >
      <GridItem rowSpan={2} colSpan={1} bg='tomato' />
      <GridItem colSpan={2} bg='papayawhip' />
      <GridItem colSpan={2} bg='papayawhip' />
      <GridItem colSpan={4} bg='tomato' />
    </Grid>
  )
}

export default App
