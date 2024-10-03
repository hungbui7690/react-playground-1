/*
  Form Control
  - Form Control provides context such as `isInvalid`, `isDisabled`, and `isRequired` to form elements
  - Chakra UI exports 4 components for Form Control:
    # FormControl: The wrapper that provides context and functionality for all children.
    # FormLabel: The label of a form section. The usage is similar to html label. htmlFor is set by default for children input.
    # FormHelperText: The message that tells users more details about the form section.
    # FormErrorMessage: The message that shows up when an error occurs.

  🌿 <Input>


*/

import {
  FormControl,
  FormLabel,
  FormHelperText,
  VStack,
  Input,
} from '@chakra-ui/react'

function App() {
  return (
    <VStack>
      <FormControl>
        <FormLabel>Email address</FormLabel>
        <Input type='email' name='email' />
        <FormHelperText>{"We'll"} never share your email.</FormHelperText>
      </FormControl>
    </VStack>
  )
}

export default App
