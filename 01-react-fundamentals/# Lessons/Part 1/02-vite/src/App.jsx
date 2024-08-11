/*
  React - Intro

************************

  Goals

************************

  Structure

************************

  Requirement

************************

  Vite 
  - npm create vite@latest
    -> Javascript Only

  - When we setup vite:
    -> Component file -> .jsx -> NOT .js
    -> index.js -> main.jsx

  - main.jsx
      createRoot(document.getElementById('root')).render(
        <StrictMode>
          <App />
        </StrictMode>
      )


*/

import './App.css'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>React Tutorial</h1>
      </header>
    </div>
  )
}

export default App
