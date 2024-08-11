/*
  Menu - Title Component
  - pic >> requirement
  - Figma: https://www.figma.com/file/PwlnSJXCuo4qD2o6EJiuj9/Menu?node-id=0%3A1&t=oaKVwYVqc9Oon2Ts-1

  - Title Component:
    > First, you need to create a Title component to display the main title of your app. 
      + This component can be a simple function that returns a heading element with the app title.

  (1) create Title.jsx

  .title {
    text-align: center;
  }

  .title-underline {
    background: var(--primary-500);
    width: 7rem;
    height: 0.25rem;
    margin: 0 auto;
    margin-top: 1rem;
  }

*/

import Title from './Title' // (2a)

const App = () => {
  // (2b)
  return (
    <main>
      <section className='menu'>
        <Title text='Our Menu' />
      </section>
    </main>
  )
}
export default App
