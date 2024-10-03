/*
  With icons
  - Center can be used to create frames around icons or numbers.



*/

import {
  AbsoluteCenter,
  Box,
  Center,
  Circle,
  HStack,
  Square,
} from '@chakra-ui/react'
import { FaPhoneAlt } from 'react-icons/fa'

function App() {
  return (
    <HStack>
      <Center w='40px' h='40px' bg='tomato' color='white'>
        <FaPhoneAlt />
      </Center>
      <Center w='40px' h='40px' bg='tomato' color='white'>
        <Box as='span' fontWeight='bold' fontSize='lg'>
          1
        </Box>
      </Center>

      {/* To reduce boilerplate, we've exported Square and Circle components that automatically centers its children given the size. */}
      <Circle size='40px' bg='tomato' color='white'>
        <FaPhoneAlt />
      </Circle>
      <Square size='40px' bg='purple.700' color='white'>
        <FaPhoneAlt />
      </Square>

      {/* AbsoluteCenter: Used to horizontally and vertically center an element relative to its parent dimensions. Uses the position: absolute strategy. Takes axis prop which is could be "both" (by default), "horizontal" or "vertical". */}
      <Box position='relative' h='100px'>
        <AbsoluteCenter bg='tomato' p='4' color='white' axis='both'>
          <FaPhoneAlt />
        </AbsoluteCenter>
      </Box>
    </HStack>
  )
}

export default App
