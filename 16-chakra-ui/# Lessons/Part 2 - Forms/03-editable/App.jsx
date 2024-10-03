/*
  Editable
  - EditableText is used for inline renaming of some text. It appears as normal UI text but transforms into a text input field when the user clicks or focuses on it.
  - Chakra UI exports 3 components to handle this functionality.
    # Editable: The wrapper component that provides context value.
    # EditableInput: The edit view of the component. It shows when you click or focus on the text.
    # EditableTextarea: Use the textarea element to handle multi line text input in an editable context.
    # EditablePreview: The read-only view of the component.



*/

import {
  Editable,
  EditableInput,
  EditableTextarea,
  EditablePreview,
  VStack,
} from '@chakra-ui/react'

function App() {
  return (
    <VStack>
      {/* Input */}
      <Editable defaultValue='Take some chakra'>
        <EditablePreview />
        <EditableInput />
      </Editable>

      {/* Text Area */}
      <Editable defaultValue='Take some chakra'>
        <EditablePreview />
        <EditableTextarea />
      </Editable>
    </VStack>
  )
}

export default App
