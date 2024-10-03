/*
  Stack items horizontally
  - Pass the direction and set it to row. Optionally, you can use align and justify to adjust the alignment and distribution of the items.

  🌿 Notes on Stack vs Flex#
  - The Stack component and the Flex component have their children spaced out evenly but the key difference is that the Stack won't span the entire width of the container whereas the Flex will. Another thing to note is that the items in both Stack and Flex are aligned in the center by default.


*/

import { Box, Heading, Stack, Text } from '@chakra-ui/react'

function Feature({ title, desc, ...rest }) {
  return (
    <Box p={5} shadow='md' borderWidth='1px' {...rest}>
      <Heading fontSize='xl'>{title}</Heading>
      <Text mt={4}>{desc}</Text>
    </Box>
  )
}

function StackEx() {
  return (
    <Stack spacing={8} direction='row'>
      <Feature
        title='Plan Money'
        desc='The future can be even brighter but a goal without a plan is just a wish'
      />
      <Feature
        title='Save Money'
        desc='You deserve good things. With a whooping 10-15% interest rate per annum, grow your savings on your own terms with our completely automated process'
      />
    </Stack>
  )
}

function App() {
  return <StackEx />
}

export default App
