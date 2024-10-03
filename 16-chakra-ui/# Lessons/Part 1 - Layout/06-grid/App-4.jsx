/*
  Template areas
  - The <templateAreas> prop specifies areas within the grid layout. Use template literals to name the area. Now you can reference the area by passing area prop in the <GridItem /> component.


*/

import { Grid, GridItem } from '@chakra-ui/react'

function App() {
  return (
    <Grid
      templateAreas={`"header header"
                      "nav    main" 
                      "nav    footer"`} // 2 columns and 3 rows
      gridTemplateRows={'50px 1fr 30px'}
      gridTemplateColumns={'150px 1fr'}
      h='200px'
      gap='1'
      color='blackAlpha.700'
      fontWeight='bold'
    >
      <GridItem pl='2' bg='orange.300' area={'header'}>
        Header
      </GridItem>
      <GridItem pl='2' bg='pink.300' area={'nav'}>
        Nav
      </GridItem>
      <GridItem pl='2' bg='green.300' area={'main'}>
        Main
      </GridItem>
      <GridItem pl='2' bg='blue.300' area={'footer'}>
        Footer
      </GridItem>
    </Grid>
  )
}

export default App
