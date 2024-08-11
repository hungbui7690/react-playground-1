/*
  Folder Structure
  - node_modules
    -> Contains all dependencies required by the app. Main dependencies also listed in package.json
  - public:
    -> Contains static assets including index.html (page template)
      + index.html
        - title
        - fonts
        - css
        - favicon
        - id="root" - our entire app


************************

  - src: 
    -> In simplest form it's the brain of our app. This is where we will do all of our work. src/index.js is the JavaScript entry point.


************************

  - .gitignore:
    -> Specifies which files source control (Git) should ignore
  - package.json
    -> Every Node.js project has a package.json and it contains info about our project, for example list of dependencies and scripts
    -> we are interested in 2 things in this file:
      + dependencies: 
      + scripts
  - package-lock.json
    -> A snapshot of the entire dependency tree
    -> we don't do anything with this file
  - README
    > The markdown file where you can share more info about the project for example build instructions and summary


************************

  Remove Boiler Plate
  - remove src folder
  - create src folder
    -> create index.js inside src


************************

  First Component
  - to create a component
    -> we need to create a function


************************
  
  - starts with capital letter
  - must return JSX (html)
  - always close tag <Greeting/>


************************

  1. index.js


*/

// Method 1
function App() {
  return <h2>My First Component</h2>
}

// Method 2: arrow function
const Greetings = () => {
  return <h1>Greetings</h1>
}

export default App // must export
