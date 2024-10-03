/*



*/

import {
  Code,
  Divider,
  Kbd,
  List,
  ListIcon,
  ListItem,
  VStack,
} from '@chakra-ui/react'
import { CiCircleCheck } from 'react-icons/ci'

function App() {
  return (
    <VStack>
      <Code colorScheme='red'>console.log(welcome)</Code>
      <Code colorScheme='green'>npm install chakra</Code>
      <Divider />
      <Kbd>shift</Kbd> + <Kbd>H</Kbd>
    </VStack>
  )
}

export default App
