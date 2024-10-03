/*
  Error message
  - <FormErrorMessage> will only show up when the property isInvalid in FormControl is true.



*/

import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  FormErrorMessage,
} from '@chakra-ui/react'
import { useState } from 'react'

function App() {
  const [input, setInput] = useState('')

  const handleInputChange = (e) => setInput(e.target.value)

  const isError = input === ''

  return (
    <FormControl isInvalid={isError} isRequired>
      <FormLabel>Email</FormLabel>
      <Input type='email' value={input} onChange={handleInputChange} />
      {!isError ? (
        <FormHelperText>
          Enter the email {"you'd"} like to receive the newsletter on.
        </FormHelperText>
      ) : (
        <FormErrorMessage>Email is required.</FormErrorMessage>
      )}
    </FormControl>
  )
}

export default App
