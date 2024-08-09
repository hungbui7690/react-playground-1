/*
  JSX - Javascript
  - refactor to single book component (personal preference)
    > remove Image, Title, Author components
  - remove inline css 
    > use external css

*/

import ReactDOM from 'react-dom/client'
import './index.css'

///////////////////////////
function BookList() {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

///////////////////////////
// *** book-1.jpg !== book1.jpg
///////////////////////////
const Book = () => {
  return (
    <article className='book'>
      <img
        src='./images/book-1.jpg'
        alt='Interesting Facts For Curious Minds'
      />
      <h2>Interesting Facts For Curious Minds</h2>
      <h4>Jordan Moore </h4>
    </article>
  )
}

///////////////////////////
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
