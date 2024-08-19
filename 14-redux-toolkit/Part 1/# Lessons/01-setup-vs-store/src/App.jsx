/*
  Intro
  - avoid headaches from Context API when project gets larger
  - redux is not part of react
  - redux: has a lot of boiler place & manual setup when we come with more advanced features 
    -> we need to install more libs and add more config setup
    -> that's why we learn "redux toolkit"


****************************

  - redux toolkit: redux with batteries
    -> libs and configs are built in
    -> do not require extra setup

  - https://redux-toolkit.js.org/introduction/getting-started


****************************

  Install
  - new app:
    ~~ npx create-react-app my-app --template redux
    ~~ npx create-react-app@latest my-app --template redux 

  - existing app:
    ~~ npm install @reduxjs/toolkit react-redux


****************************

  - when we install redux-toolkit -> it consists of few libraries
    -> redux (core library, state management)
    -> immer (allows to mutate state)
    -> redux-thunk (handles async actions)
    -> reselect (simplifies reducer functions)


****************************

  - Extras
    -> redux devtools
    -> combine reducers


****************************

  - If you need React bindings:
    ~~ npm install react-redux
    -> connects our app to redux


****************************

  Setup Store
  1. create store.js
  2. main.jsx 
    -> setup provider


*/

function App() {
  return <h2>Redux Toolkit</h2>
}

export default App
