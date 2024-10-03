/*
  Flex and Spacer vs Grid vs Stack#
  - The Flex and Spacer components, Grid and HStack treat children of different widths differently.
    # In HStack, the children will have equal spacing between them but they won't span the entire width of the container.
    # In Grid, the starting points of the children will be equally spaced but the gaps between them will not be equal.
    # With Flex and Spacer, the children will span the entire width of the container and also have equal spacing between them.


*/

import { Box, Flex, Grid, HStack, Spacer, Text } from '@chakra-ui/react'

function App() {
  return (
    <Box>
      <Text>Flex and Spacer: Full width, equal Spacing</Text>
      <Flex>
        <Box w='70px' h='10' bg='red.500' />
        <Spacer />
        <Box w='170px' h='10' bg='red.500' />
        <Spacer />
        <Box w='180px' h='10' bg='red.500' />
      </Flex>

      <Text>
        Grid: The children start at the beginning, the 1/3 mark and 2/3 mark
      </Text>
      <Grid templateColumns='repeat(3, 1fr)' gap={6}>
        <Box w='70px' h='10' bg='blue.500' />
        <Box w='170px' h='10' bg='blue.500' />
        <Box w='180px' h='10' bg='blue.500' />
      </Grid>

      <Text>
        HStack: The children have equal spacing but {"don't"} span the whole
        container
      </Text>
      <HStack spacing='24px'>
        <Box w='70px' h='10' bg='teal.500' />
        <Box w='170px' h='10' bg='teal.500' />
        <Box w='180px' h='10' bg='teal.500' />
      </HStack>
    </Box>
  )
}

export default App
