/*
  Buttons


*/

import { Button, ButtonGroup, Spinner, VStack } from '@chakra-ui/react'
import { FaPhoneAlt } from 'react-icons/fa'

function App() {
  return (
    <VStack>
      <Button colorScheme='blue'>Button</Button>
      {/* Sizes */}
      <Button colorScheme='red' size='xs'>
        Button
      </Button>
      <Button colorScheme='orange' size='sm'>
        Button
      </Button>
      {/* Variants */}
      <Button colorScheme='yellow' variant='solid'>
        Solid
      </Button>
      <Button colorScheme='green' variant='outline'>
        Outline
      </Button>
      <Button colorScheme='cyan' variant='ghost'>
        Ghost
      </Button>
      <Button colorScheme='pink' variant='link'>
        Link
      </Button>
      {/* Icons */}
      <Button leftIcon={<FaPhoneAlt />}>Phone</Button>
      <Button rightIcon={<FaPhoneAlt />}>Phone</Button>
      {/* Loading */}
      <Button
        isLoading
        loadingText='Submitting'
        colorScheme='teal'
        variant='outline'
      />
      {/* Custom Loading */}
      <Button
        isLoading
        colorScheme='blue'
        spinner={<BeatLoader size={8} color='white' />}
      >
        Click me
      </Button>
      {/* Set the size and variant of all buttons within it.
          Add spacing between the buttons.
          Flush the buttons together by removing the border radius of their children as needed. */}
      <ButtonGroup variant='outline' spacing='6'>
        <Button colorScheme='blue'>Save</Button>
        <Button>Cancel</Button>
      </ButtonGroup>
    </VStack>
  )
}

function BeatLoader() {
  return <Spinner color='red.500' />
}

export default App
