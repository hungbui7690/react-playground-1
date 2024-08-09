/*
  Root Component
  - we can create many, many components
    > but for root component, we just create only one

  - since we modify index.js >> sometimes, it creates error
    > just need to restart server

  //////////////////////////////////

  Extensions and settings.json
  - pic

  - Auto Rename Tag
  - Highlight Matching Tag
    > customize in settings.json
  - Prettier
    > format on save
    > format on paste
    > Default Formatter (Prettier - Code formatter)

  
  - settings.json
      "editor.formatOnPaste": true,
      "editor.formatOnSave": true,
      "editor.defaultFormatter": "esbenp.prettier-vscode",
        "prettier.singleQuote": true,
        "prettier.semi": false,


  - Emmet
    > in settings.json
        "emmet.includeLanguages": {
            "javascript": "javascriptreact"
          },
      >> this is used for: h2#some-id.some-class + tab >> shorthand
        

  - ES7 Snippets
    - this helps to setup our component really fast
    - rafce (arrow func with export)
    - rfce (regular func with export )
    - same as the file name
    - react auto import
      > uncheck
      > React Snippets › Settings: Import React On Top (pic)

*/

import React from 'react'
import ReactDOM from 'react-dom/client'

const Greeting = () => {
  return <h2>My First Component</h2>
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Greeting />)
