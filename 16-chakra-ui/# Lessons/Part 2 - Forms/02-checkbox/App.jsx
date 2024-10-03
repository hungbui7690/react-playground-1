/*
  Checkbox



*/

import { VStack, Checkbox } from '@chakra-ui/react'

function App() {
  return (
    <VStack>
      <Checkbox defaultChecked colorScheme='pink'>
        Checkbox
      </Checkbox>
      <Checkbox size='lg' isDisabled defaultChecked>
        Checkbox
      </Checkbox>
      <Checkbox isInvalid>Checkbox</Checkbox>
      <Checkbox spacing='1rem'>Option</Checkbox>
      <Checkbox iconColor='blue.400' iconSize='1rem' defaultChecked>
        Option
      </Checkbox>
    </VStack>
  )
}

export default App
