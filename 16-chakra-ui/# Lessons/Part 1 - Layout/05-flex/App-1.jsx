/*
  Flex
  - Flex: A Box with display: flex.
  - Spacer: Creates an adjustable, empty space that can be used to tune the spacing between child elements within Flex.
  - props: 
    # flexDirection is <direction>
    # flexWrap is <wrap>
    # flexBasis is <basis>
    # flexGrow is <grow>
    # flexShrink is <shrink>
    # alignItems is <align>
    # justifyContent is <justify>



*/

import { Container, Flex, Square } from '@chakra-ui/react'

function App() {
  return (
    <>
      <Flex color='white'>
        <Container flex={1} bg='green.500'>
          Box 1
        </Container>
        <Container flex={1} bg='blue.500'>
          Box 2
        </Container>
        <Square size={'100px'} bg='tomato'>
          Box 3
        </Square>
      </Flex>
    </>
  )
}

export default App
