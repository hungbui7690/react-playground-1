/*
  Root Component
  - we can create many, many components
    -> but for root component, we just need one


*******************************

  Extensions and settings.json
  - pic
  - Auto Rename Tag
  - Highlight Matching Tag
    -> customize in settings.json

*******************************

  - Prettier
    -> format on save
    -> format on paste
    -> Default Formatter (Prettier - Code formatter)


*******************************

  - settings.json
      "editor.formatOnPaste": true,
      "editor.formatOnSave": true,
      "editor.defaultFormatter": "esbenp.prettier-vscode",
        "prettier.singleQuote": true,
        "prettier.semi": false,


*******************************

  - Emmet
  -> in settings.json
      "emmet.includeLanguages": {
          "javascript": "javascriptreact"
      },
    => this is used for: h2#some-id.some-class + tab -> shorthand


*******************************

  - ES7 Snippets
    -> this helps to setup our component really fast
    -> rafce (arrow func with export)
    -> rfce (regular func with export )
    -> same as the file name
    -> react auto import
      # uncheck
      # Settings > React Snippets -> uncheck Import React On Top


*/

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

const Greeting = () => {
  return <h2>My First Component</h2>
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Greeting />
  </StrictMode>
)
