/*
  Form Control
  - <FormLabel as='legend'>



*/

import {
  FormControl,
  FormLabel,
  FormHelperText,
  VStack,
  HStack,
  RadioGroup,
  Radio,
} from '@chakra-ui/react'

function App() {
  return (
    <VStack p={8}>
      <FormControl as='fieldset'>
        <FormLabel as='legend'>Favorite Naruto Character</FormLabel>
        <RadioGroup defaultValue='Itachi'>
          <HStack spacing='24px'>
            <Radio value='Sasuke'>Sasuke</Radio>
            <Radio value='Nagato'>Nagato</Radio>
            <Radio value='Itachi'>Itachi</Radio>
            <Radio value='Sage of the six Paths'>Sage of the six Paths</Radio>
          </HStack>
        </RadioGroup>
        <FormHelperText>Select only if {"you're"} a fan.</FormHelperText>
      </FormControl>
    </VStack>
  )
}

export default App
