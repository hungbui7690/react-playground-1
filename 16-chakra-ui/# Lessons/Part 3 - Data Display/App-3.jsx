/*
  Select & NumberInput
  - https://v2.chakra-ui.com/docs/components/form-control

  🌿 Can have State management + validation with Formik


*/

import {
  List,
  ListIcon,
  ListItem,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  VStack,
} from '@chakra-ui/react'
import { CiCircleCheck } from 'react-icons/ci'

function App() {
  return (
    <VStack>
      <List spacing={3}>
        <ListItem>
          <ListIcon as={CiCircleCheck} color='green.500' />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit
        </ListItem>
        <ListItem>
          <ListIcon as={CiCircleCheck} color='green.500' />
          Assumenda, quia temporibus eveniet a libero incidunt suscipit
        </ListItem>
      </List>

      <Stat>
        <StatLabel>Collected Fees</StatLabel>
        <StatNumber>£0.00</StatNumber>
        <StatHelpText>Feb 12 - Feb 28</StatHelpText>
      </Stat>
    </VStack>
  )
}

export default App
