/*
  Container
  - used to constrain a content's width to the current breakpoint, while keeping it <fluid>.
  - props: 
    - maxW
    - bg='green.400'

  🌿 By default, the Container component sets the maxWidth of the content to <60> characters (60ch) but you can customize this by passing custom <maxWidth> values or changing the size tokens defined in theme.sizes.container.
  🌿 You can use the <centerContent> prop to center the content. It renders a <flexbox> with <flexDirection> set to <column> and <alignItems> set to <center>.


*/

import { Container } from '@chakra-ui/react'

function App() {
  return (
    <>
      <Container maxW={'3xl'} bg={'blue.600'} color='white' p={4} centerContent>
        There are many benefits to a joint design and development system. Not
        only does it bring benefits to the design team, but it also brings
        benefits to engineering teams. It makes sure that our experiences have a
        consistent look and feel, not just in our design specs, but in
        production
      </Container>
    </>
  )
}

export default App
