/*
  Select & NumberInput
  - https://v2.chakra-ui.com/docs/components/form-control

  🌿 Can have State management + validation with Formik


*/

import {
  FormControl,
  FormLabel,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
} from '@chakra-ui/react'

function App() {
  return (
    <FormControl p={8}>
      <FormLabel>Country</FormLabel>
      <Select placeholder='Select country'>
        <option>United Arab Emirates</option>
        <option>Nigeria</option>
      </Select>

      <FormLabel mt={4}>Amount</FormLabel>
      <NumberInput max={50} min={10}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </FormControl>
  )
}

export default App
